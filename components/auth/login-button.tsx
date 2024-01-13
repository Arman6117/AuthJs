"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const LoginButton = ({
  children,
  asChild,
  mode = 'redirect' ,
}: LoginButtonProps) => {
  const router = useRouter();

  if (mode === 'modal') {
   return <span>TODO:Implement login modal</span>
  }
  const handleClick = () => {
    router.push("/auth/login");
  };
  return (
    <span onClick={handleClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LoginButton;
