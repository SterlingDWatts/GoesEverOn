import { decodeToken } from "react-jwt";
import { User } from "../contexts/userContext";

const isUser = (decodedToken: unknown | null): decodedToken is User => {
  if (decodedToken === null) return false;

  if (typeof decodedToken !== "object") return false;

  const userKeys = ["email", "name", "picture", "given_name", "family_name"];
  return userKeys.every((key) => key in decodedToken && typeof (decodedToken as User)[key as keyof User] === "string");
};

export const decodeUserToken = (token: string | null) => {
  const decodedToken = decodeToken(token || "");
  return isUser(decodedToken) ? decodedToken : null;
};
