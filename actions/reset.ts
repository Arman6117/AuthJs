"use server";

import { ResetSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import * as Z from "zod";
import { generatePasswordResetToken } from "@/lib/token";
import { sendResetPasswordEmail } from "@/lib/mail";

export const reset = async (values: Z.infer<typeof ResetSchema>) => {
    const validatedField = ResetSchema.safeParse(values);

    if(!validatedField.success) {
        return {error:'Invalid email '}
    }

    const {email} = validatedField.data

    const existingUser = await getUserByEmail(email)

    if(!existingUser) {
        return {error : "Email not found"}
    }

    const passwordResetToken = await generatePasswordResetToken(email);

    await sendResetPasswordEmail(
        passwordResetToken.email,
        passwordResetToken.token
    )
    return {success:"Reset password email send successfully"}
};
