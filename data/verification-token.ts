import { db } from "@/lib/db";

export const getVerificationTokenByToken = async (token: string) => {
    try {
        const verificationToken = await db.verificationToken.findUnique({
            where: {token}
        })

        
       
        return verificationToken
    } catch (error) {
        return null;
    }
}
export const getVerificationTokenByEmail = async (email: string) => {
    try {
        const verificationToken = await db.verificationToken.findFirst({
            where: {email}
        })

        console.log(verificationToken)
        return verificationToken
    } catch (error) {
        return null;
    }
}

// import { db } from "../lib/db"

