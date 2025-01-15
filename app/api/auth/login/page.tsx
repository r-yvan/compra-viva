"use client";
import { signIn } from "next-auth/react";
import React from "react";
import {
  IconMail,
  IconShieldLock,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import prisma from "@/prisma/client";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const router = useRouter();
  const onFormSubmit = async (event: any) => {
    event.preventDefault();
    try {
      signIn("your credentials", {
        redirect: true,
        email: email,
        password: password,
      });
      console.log("Session provided!!");
      console.log("Redirecting to suitable dashboard...");
      const user = await prisma.users.findUnique({
        where: { email: email },
      });
      if (user) {
        const role = user.role;
        switch (role) {
          case "administrator":
            router.push("/admin/pages/dashboard");
            break;
          case "seller":
            router.push("/seller/pages/dashboard");
            break;
          case "buyer":
            router.push("/buyer/pages/dashboard");
            break;
          default:
            router.push("/");
        }
      }
    } catch (error: any) {
      console.error("Failed to sign in: ", error);
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center bg-[#050505] w-full h-screen">
      <div className="relative overflow-hidden">
        <form
          onSubmit={onFormSubmit}
          className="card-lighter flex flex-col p-5 border border-white border-opacity-10 rounded-lg gap-3 w-[500px] bg-[#0a0a0a]"
        >
          <div className="flex flex-col gap-2 mb-4">
            <h1 className="text-3xl font-bold tracking-tight">
              Log into your <br />
              <span className="text-violet-400">Account</span>
            </h1>
            <p className="opacity-50 w-80">
              Trade with the best, get the best deals and make the best profit
            </p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <div className="flex flex-col relative">
              <IconMail className="absolute top-3 left-3 opacity-50" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={
                  "bg-[#0A0A0A50] w-full outline-none p-3 pl-11 rounded-lg border"
                }
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Password</label>
            <div className="flex flex-col relative">
              <IconShieldLock className="absolute top-3 left-3 opacity-50" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className={`bg-[#0A0A0A50] w-full outline-none p-3 pl-11 rounded-lg border `}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <p>{error}</p>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-10 py-3 bg-violet-700 rounded-lg"
            >
              Login
            </button>
          </div>
          <div className="flex justify-center">
            <p>
              Don't have an account?{" "}
              <a href="/pages/register" className="underline text-violet-700">
                Signup
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
