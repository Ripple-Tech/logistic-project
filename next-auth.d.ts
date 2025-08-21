import { UserRole } from "@/lib/generated/prisma/client";
import NextAuth, { type DefaultSession} from "next-auth";
import "next-auth/jwt";

export type ExtendedUser = DefaultSession["user"] & {
  id: string;
  username: string | null;
  role: UserRole;
  isTwoFactorEnabled: boolean;
  isChatEnabled: boolean;
  isOAuth: boolean;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

