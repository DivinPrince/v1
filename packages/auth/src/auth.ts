import { betterAuth, BetterAuthOptions } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "@v1/db";
import { emailHarmony } from 'better-auth-harmony';
import { nextCookies } from "better-auth/next-js";


const baseURL = process.env.AUTH_BASE_URL ?? "http://localhost:3000";
const trustedOrigins = process.env.AUTH_TRUSTED_ORIGINS?.split(",") ?? ["localhost:3000"];
const domain = process.env.AUTH_DOMAIN


export const auth = betterAuth({
  trustedOrigins,
  baseURL,
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  secret: process.env.BETTER_AUTH_SECRET!,
  plugins: [emailHarmony(), nextCookies()],
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  ...(process.env.NODE_ENV === "production" && {
    advanced: {
      crossSubDomainCookies: {
        enabled: true,
        domain: domain,
      },
    },
  }),
});

export type Session = typeof auth.$Infer.Session;