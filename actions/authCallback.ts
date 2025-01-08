import { currentUser } from "@/lib/auth";
import { db } from "@/db";


export const authCallback = async () => {
    const user = await currentUser();

    if (!user?.id || !user.email) {
        return { error: "Unauthorized" };
    }

    // Check if the user is in the database
    const dbUser = await db.user.findFirst({
        where: { id: user.id },
    });

    if (!dbUser) {
        // Create user in db
        await db.user.create({
        // @ts-ignore
        data: {
            id: user.id,
            email: user.email,
        },
        });
    }

    return { success: true };
};