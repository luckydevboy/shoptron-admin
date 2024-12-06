"use client";

import { Controller, useForm } from "react-hook-form";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import { useLogin } from "@/services/users/hooks";

type FormData = {
  email: string;
  password: string;
};

const schema = z
  .object({
    email: z.string().email().trim(),
    password: z.string().min(6),
  })
  .required();

const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const { login, isLoggingIn, error } = useLogin();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    await login(data);
    router.push("/");
  });

  return (
    <form
      onSubmit={onSubmit}
      className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
     bg-white p-8 rounded-lg shadow-md w-[450px] space-y-4"
    >
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={65}
          height={65}
        />
        <h2 className="text-neutral-800 font-bold text-2xl mt-3 mb-1">
          Shoptron Admin
        </h2>
        <h3 className="text-neutral-600 font-semibold text-lg">
          Login to your account
        </h3>
      </div>
      <Controller
        render={({ field }) => (
          <Input
            label="Email"
            placeholder="example@example.com"
            error={errors.email?.message}
            {...field}
          />
        )}
        name="email"
        control={control}
      />
      <Controller
        render={({ field }) => (
          <Input
            type="password"
            label="Password"
            placeholder="Password"
            error={errors.password?.message}
            {...field}
          />
        )}
        name="password"
        control={control}
      />
      <Button
        className="w-full"
        type="submit"
        isLoading={isLoggingIn}
        disabled={isLoggingIn}
      >
        Login
      </Button>
      {error && <p className="text-error-600">{error.toString()}</p>}
    </form>
  );
};

export default Login;
