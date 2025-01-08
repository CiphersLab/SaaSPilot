"use server"

import { db } from "@/db";
import { currentUser } from "@/lib/auth";
import { UserRole } from "@prisma/client";

export const getUsers = async ({
    page = 1,
    limit = 10,
    search
}: {
    page?: number;
    limit?: number;
    search?: string;
}) => {
    const response = await db.user.findMany({
        ...search && { where: { name: { contains: search } } },
        take: limit, skip: (page - 1) > 0 ? limit * (page - 1) : 0,
    });

    const total = (await db.user.findMany()).length;

    return { success: "Users were fetched successfully!", users: response, totalItems: total };
}

export const toggleUserRole = async (userId: string, role: UserRole) => {
    const loggedInUser = await currentUser();

    if (loggedInUser && loggedInUser.id === userId) {
        return { error: "You cannot change your own role." };
    }

    let user = await db.user.findFirst({
        where: {
            id: userId
        }
    });

    if (!user) return { error: "User with such Id not found!" };

    const updatedUser = await db.user.update({
        where: {
            id: userId,
        },
        data: {
            role
        },
        select: {
            name: true,
            email: true,
            role: true
        }
    });

    return { success: "User was updated successfully", user: updatedUser };
}