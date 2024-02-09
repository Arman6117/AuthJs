"use client";
import React from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const Social = () => {
  const handleClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="w-full flex gap-x-2 items-center">
      <Button
        className="w-full "
        size={"lg"}
        variant={"outline"}
        onClick={() => handleClick("google")}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        className="w-full "
        size={"lg"}
        variant={"outline"}
        onClick={() => handleClick("github")}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Social;
