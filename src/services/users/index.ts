import { default as ky } from "@/services/kyInstance";
import { Response } from "@/services/types";
import { User } from "@/services/users/types";

export const login = async (
  url: string,
  { arg }: { arg: { email: string; password: string } },
) => {
  return ky.post(url, { json: arg });
};

export const getUsers = () => ky.get<Response<User[]>>("users").json();
