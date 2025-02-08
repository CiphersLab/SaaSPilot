"use server";

import * as z from "zod";
import bcrypt from "bcrypt";

import { RegisterSchema } from "@/schemas";
import { db } from "@/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const user = await db.user.findFirst({
    where: {
      username: values.username
    }
  });

  if (user) return { error: "Username is already taken!" };

  const { email, name, password, username } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  const adminEmails = process.env.ADMIN_EMAILS?.split(',') || [];
  const isAdmin = adminEmails.includes(email);

  let currentUser = await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      username,
      role: isAdmin ? "ADMIN" : "USER"
    },
  });

  await db.credit.create({
    data: {
      userId: currentUser?.id,
      balance: parseInt(process.env.INITIAL_CREDITS_FOR_NEW ?? '0'),
    },
  });

  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token, name ?? "");

  return { sucess: "Confirmation email sent!" };
};

function nameToSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
}
