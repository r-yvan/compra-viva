"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { useRouter } from "next/navigation";
import { IconMail, IconShieldLock } from "@tabler/icons-react";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const router = useRouter();

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("your credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      router.push("/"); // or redirect to user role-based dashboard
    } else {
      setError("Invalid credentials");
    }
  };

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" }); // or dynamic role route
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <form onSubmit={onFormSubmit} className="p-6 bg-gray-900 rounded-lg w-96">
        <h2 className="text-white text-2xl mb-4">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <label className="block text-white">Email</label>
          <input
            type="email"
            className="w-full p-2 rounded"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Password</label>
          <input
            type="password"
            className="w-full p-2 rounded"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-violet-600 text-white p-2 rounded mb-2"
        >
          Login
        </button>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full bg-red-600 text-white p-2 rounded"
        >
          Sign in with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
