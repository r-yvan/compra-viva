"use client";
import React from "react";
import {
  IconMail,
  IconShieldLock,
  IconUserHexagon,
  IconCaretDown,
} from "@tabler/icons-react";
// import axios from "axios";

const Register = () => {
  // const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center bg-[#050505] w-full h-screen">
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
              <option className="bg-red-400 m-2 border border-white border-opacity-50">Administrator</option>
              <option>Buyer</option>
              <option>Seller</option>
            </select>
            <div>
              <IconCaretDown className="absolute bottom-3 right-3 pointer-events-none opacity-50" />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-10 py-3  bg-violet-700 rounded-lg"
          >
            Register
          </button>
        </div>
        <div className="flex justify-center">
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
