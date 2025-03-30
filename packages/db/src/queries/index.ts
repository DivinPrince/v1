import db from "..";
import { post } from "../schema";

export const getPosts = async () => {
  try {
    const result = await db.select().from(post);
    return {
      data: result,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error,
    };
  }
};