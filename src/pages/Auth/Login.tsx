import React from "react";
import * as yup from "yup";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { UseAppDispatch } from "../../Global/Store";
import { useMutation } from "@tanstack/react-query";
import { UsersLogin } from "../../Utils/APIs";
import { login } from "../../Global/ReduxState";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = UseAppDispatch();

  const userSchema = yup
    .object({
      email: yup.string().required("Please enter your email"),
      password: yup.string().required("Please enter your password"),
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

  const posting = useMutation({
    mutationKey: ["current user"],
    mutationFn: UsersLogin,

    onSuccess: (myData) => {
      dispatch(login(myData.data));

      Swal.fire({
        title: "Login Successfull",
        html: "Taking you to your dashboard",
        timer: 1000,
        timerProgressBar: true,

        didOpen: () => {
          Swal.showLoading();
        },

        willClose: () => {
          navigate("/user-dashboard");
        },
      });
    },
    onError: (error: any) => {
      Swal.fire({
        title: "Registration failed",
        text: "Email or password incorrect",
        icon: "error",
      });
    },
  });

  const Submit = handleSubmit(async (data) => {
    posting.mutate(data);
  });

  return (
    <div className="w-full h-screen bg-green-500 flex justify-center items-center">
      <div className="border shadow-2xl py-10 flex flex-col justify-center items-center w-6/12">
        <h4 className="text-white font-bold text-4xl mb-5">Login</h4>
        <div className="w-full max-w-xs" onSubmit={Submit}>
          <form className=" ">
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
              <p className="text-red-500 text-xl italic">
                {errors?.email && errors?.email?.message}
              </p>
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
              <p className="text-red-500 text-xl italic">
                {errors?.password && errors?.password?.message}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-orange-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Sign In
              </button>

              <a className="inline-block align-baseline font-bold text-base hover:text-white text-white">
                Forgot Password?{" "}
                <NavLink to="/forget-password">
                  <span className="text-white cursor-pointer text-xl">
                    click here
                  </span>
                </NavLink>
              </a>
            </div>
          </form>
          <p className="text-center text-white mt-5 text-lg">
            Don't have an account?{" "}
            <NavLink to="/register-user">
              <span className="cursor-pointer text-white text-xl">
                Sign up here
              </span>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
