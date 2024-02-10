import GitHub from "next-auth/providers/github";

import type { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import bcrypt from "bcryptjs";

import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./data/user";



export default {
  providers: [
    Google({
      clientId:
        "411580027951-qm7jur1dknt5j3bsr06aqqcat2nlmc7i.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    GitHub({
      clientId: "acf7beb3a41816b697fd",
      clientSecret: "c386024c538f44dbcd8fdd62888b419659d651d0",
    }),
    credentials({
      async authorize(credentials) {
        const validatedField = LoginSchema.safeParse(credentials);

        if (validatedField.success) {
          const { email, password } = validatedField.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (passwordMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
