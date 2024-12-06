import useSWRMutation from "swr/mutation";
import { getUsers, login } from "@/services/users/index";
import useSWR from "swr";
import { Response } from "@/services/types";
import { User } from "@/services/users/types";

export const useLogin = () => {
  const { trigger, isMutating, error } = useSWRMutation("users/login", login);

  return {
    login: trigger,
    isLoggingIn: isMutating,
    error,
  };
};

export const useGetUsers = () => {
  const { data, error, isLoading } = useSWR("users", getUsers);

  return {
    data,
    error,
    isLoading,
  };
};
