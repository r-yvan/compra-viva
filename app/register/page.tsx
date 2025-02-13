"use client";
import React from "react";
import {
  IconMail,
  IconShieldLock,
  IconUserHexagon,
  IconCaretDown,
} from "@tabler/icons-react";
import Link from "next/link";
import { useFormik } from "formik";
import { registrationSchema } from "./schema";
// import axios from "axios";

const Register = () => {
  const onSubmit = () => {};
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      role: "",
    },
    validationSchema: registrationSchema,
    onSubmit,
  });
  return (
    <div className="flex justify-center items-center bg-[#050505] w-full h-screen">
      <div className="relative">
        <div className="card-lighter flex flex-col p-5 border border-white border-opacity-10 rounded-lg gap-3 w-[500px] bg-[#0a0a0a]">
          <div className="flex flex-col gap-2 mb-4">
            <h1 className="text-3xl font-bold">
              Create Your New <br />
              Account
            </h1>
            <p className="opacity-80">
              Connect to the world largest online market with a single click
            </p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Username</label>
            <div className="flex relative">
              <IconUserHexagon className="absolute top-3 left-3 opacity-50" />
              <input
                type="text"
                placeholder="Username"
                value={formik.values.username}
                onChange={formik.handleChange}
                className="bg-[#0a0a0a] w-full outline-none p-3 pl-11 rounded-lg border border-white border-opacity-20"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <div className="flex relative">
              <IconMail className="absolute top-3 left-3 opacity-50" />
              <input
                type="email"
                placeholder="Email"
                className="bg-[#0a0a0a] w-full outline-none p-3 pl-11 rounded-lg border border-white border-opacity-20"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Password</label>
            <div className="flex relative">
              <IconShieldLock className="absolute top-3 left-3 opacity-50" />
              <input
                type="password"
                placeholder="Password"
                className="bg-[#0a0a0a] w-full outline-none p-3 pl-11 rounded-lg border border-white border-opacity-20"
              />
            </div>
          </div>
          <div className="flex flex-col relative">
            <label className="" htmlFor="">
              Role
            </label>
            <div className="relative">
              <select className="w-full bg-[#0a0a0a] outline-none p-3 pl-4 appearance-none rounded-lg border border-white border-opacity-20">
                <option className="bg-red-400 m-2 border border-white border-opacity-50">
                  Administrator
                </option>
                <option>Buyer</option>
                <option>Seller</option>
              </select>
              <div>
                <IconCaretDown className="absolute bottom-3 right-3 pointer-events-none opacity-50" />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              href="/login"
              type="submit"
              className="px-10 py-3 bg-violet-700 rounded-lg"
            >
              Register
            </Link>
          </div>
          <div className="flex justify-center">
            <p>
              Already have an account?{" "}
              <a href="/login" className="underline text-violet-700">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
