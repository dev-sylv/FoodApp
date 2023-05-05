import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UseAppDispatch, useAppSelector } from "../../Global/Store";
import { UsersRegistration } from "../../Utils/APIs";
import axios from "axios";
import { login } from "../../Global/ReduxState";
import * as yup from "yup";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

const Register = () => {
  const userSchema = yup
    .object({
      name: yup.string().required("please enter a name"),
      email: yup.string().required("please enter an email"),
      password: yup.string().required("please enter a password"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "passwords must match")
        .required("please confirm your password"),
    })
    .required();
  type formData = yup.InferType<typeof userSchema>;

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<formData>({
    resolver: yupResolver(userSchema),
  });

  // Bringing in redux states:
  const dispatch = UseAppDispatch();
  const navigate = useNavigate();

  const CurrentUser = useAppSelector((state: any) => state?.user);

  const CreateUser = useMutation({
    mutationKey: ["New user"],
    mutationFn: UsersRegistration,

    onSuccess: (res) => {
      dispatch(login(res.data.data));
      // console.log(res.data.data);
      Swal.fire({
        title: "User registered sucessfully",
        html: "redirecting to email",
        timer: 2000,
        timerProgressBar: true,

        willClose: () => {
          navigate("/redirect-to-email");
        },
      });
    },
  });

  const UserReg = handleSubmit(async (data: any) => {
    CreateUser.mutate(data);
  });

  return (
    <div className="w-full h-screen bg-green-500 flex justify-center items-center">
      <div className="border shadow-2xl py-10 flex flex-col justify-center items-center w-6/12">
        <h4 className="text-white font-bold text-4xl mb-5">Sign Up</h4>
        <div className="w-full max-w-xs" onSubmit={UserReg}>
          <form className=" ">
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter your name"
                {...register("name")}
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Enter your email"
                {...register("email")}
              />
            </div>

            <div className="mb-6">
              <label className="block text-white text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Enter your password"
                {...register("password")}
              />
              {/* <p className="text-red-500 text-xs italic">
                Please enter your password.
              </p> */}
            </div>

            <div className="mb-6">
              <label className="block text-white text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Confirm your password"
                {...register("confirmPassword")}
              />
              {/* <p className="text-red-500 text-xs italic">
                Please enter your password.
              </p> */}
            </div>

            <div className="flex items-center justify-between">
              <button
                className=" w-full bg-orange-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Sign In
              </button>
            </div>
          </form>
          <p className="text-center text-white mt-5 text-lg">
            Already have an account?{" "}
            <NavLink to="/login-user">
              <span className="cursor-pointer">Login here</span>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
