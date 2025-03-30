import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "@v1/auth/server";

export const { GET, POST } = toNextJsHandler(auth.handler);