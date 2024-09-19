"use client";

import {
  EmailOutlined,
  LockOutlined,
  PersonOutline,
} from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react"

const Form = ({ type }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    if (type === "signup") {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push("/");
      }

      if (res.error) {
        toast.error("Something went wrong");
      }
    }

    if (type === "login") {
      const res = await signIn("credentials", {
        ...data,
        redirect: false,
      })

      if (res.ok) {
        router.push("/chats");
      }

      if (res.error) {
        toast.error("Invalid email or password");
      }
    }
  };


  return (
    <div className="auth">
      <div className="content">
        {/* <img src="/assets/logo.png" alt="logo" className="logo" /> */}
        <h1 className="text-heading2-bold text-color3">e-Hato</h1>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          {type === "signup" && (
            <div>
              <div className="input">
                <input
                  defaultValue=""
                  {...register("username", {
                    required: "Username is required",
                  })}
                  type="text"
                  placeholder="Username"
                  className="input-field"
                />
                <PersonOutline sx={{ color: "#737373" }} />
              </div>
              {errors.username && (
                <p className="text-red-500">{errors.username.message}</p>
              )}
            </div>
          )}

          <div>
            <div className="input">
              <input
                defaultValue=""
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Email"
                className="input-field"
              />
              <EmailOutlined sx={{ color: "#737373" }} />
            </div>
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <div className="input">
              <input
                defaultValue=""
                {...register("password", {
                  required: "Password is required",
                })}
                type="password"
                placeholder="Password"
                className="input-field"
              />
              <LockOutlined sx={{ color: "#737373" }} />
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button className="button text-color3" type="submit">
            {type === "signup" ? "Sign Up" : "Log In"}
          </button>
        </form>

        {type === "signup" ? (
          <Link href="/" className="link">
            <p className="text-center">Already have an account? Log In Here</p>
          </Link>
        ) : (
          <Link href="/signup" className="link">
            <p className="text-center">New to e-Hato? Register Here</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Form;