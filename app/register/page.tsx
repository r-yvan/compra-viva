"use client";
import { registrationSchema } from "./schema";
import { Bars } from "react-loader-spinner";
import { useFormik } from "formik";
import React from "react";
import {
  IconMail,
  IconShieldLock,
  IconUserHexagon,
  IconCaretDown,
} from "@tabler/icons-react";
import axios from "axios";

const Register = () => {
  const onFormSubmit = async (values: any, actions: any) => {
    try {
      await axios.post("/register/api", values);
      actions.resetForm();
    } catch (error: any) {
      actions.setFieldError("email", "User with this email already exists!!");
    }
  };

  const {
    values,
    handleChange,
    isSubmitting,
    handleBlur,
    handleSubmit,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      role: "administrator",
    },
    validationSchema: registrationSchema,
    onSubmit: onFormSubmit,
  });
  return (
    <div className="flex justify-center items-center bg-[#050505] w-full h-screen">
      <div className="relative overflow-hidden">
        <form
          onSubmit={handleSubmit}
          className="card-lighter flex flex-col p-5 border border-white border-opacity-10 rounded-lg gap-3 w-[500px] bg-[#0a0a0a]"
        >
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
            <div className="flex flex-col relative">
              <IconUserHexagon className="absolute top-3 left-3 opacity-50" />
              <input
                type="text"
                name="username"
                onBlur={handleBlur}
                placeholder="Username"
                value={values.username}
                onChange={handleChange}
                className={`bg-[#0A0A0A50] w-full outline-none p-3 pl-11 rounded-lg border ${
                  errors.username && touched.username
                    ? `border-red-400 border-opacity-80 text-red-400`
                    : `border-opacity-20 border-white text-white`
                }`}
              />
              {errors.username && touched.username ? (
                <p className="text-red-400 text-sm">{errors.username}</p>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <div className="flex flex-col relative">
              <IconMail className="absolute top-3 left-3 opacity-50" />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email"
                className={`bg-[#0A0A0A50] w-full outline-none p-3 pl-11 rounded-lg border ${
                  errors.email && touched.email
                    ? `border-red-400 border-opacity-80 text-red-400`
                    : `border-opacity-20 border-white text-white`
                }`}
              />
              {errors.email && touched.email ? (
                <p className="text-red-400 text-sm">{errors.email}</p>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Password</label>
            <div className="flex flex-col relative">
              <IconShieldLock className="absolute top-3 left-3 opacity-50" />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Password"
                className={`bg-[#0A0A0A50] w-full outline-none p-3 pl-11 rounded-lg border ${
                  errors.password && touched.password
                    ? `border-red-400 border-opacity-80 text-red-400`
                    : `border-opacity-20 border-white text-white`
                }`}
              />
              {errors.password && touched.password ? (
                <p className="text-red-400 text-sm">{errors.password}</p>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col relative">
            <label className="" htmlFor="">
              Role
            </label>
            <div className="relative">
              <select
                name="role"
                value={values.role}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full bg-[#0A0A0A50] outline-none p-3 pl-4 appearance-none rounded-lg border border-white border-opacity-20"
              >
                <option
                  value="administrator"
                  className="bg-red-400 m-2 border border-white border-opacity-50"
                >
                  Administrator
                </option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
              <div>
                <IconCaretDown className="absolute bottom-3 right-3 pointer-events-none opacity-50" />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-10 py-3 bg-violet-700 rounded-lg"
            >
              {isSubmitting ? (
                <Bars
                  height="24"
                  width="24"
                  color="#FFFFFF"
                  ariaLabel="bars-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              ) : (
                "Register"
              )}
            </button>
          </div>
          <div className="flex justify-center">
            <p>
              Already have an account?{" "}
              <a href="/login" className="underline text-violet-700">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
