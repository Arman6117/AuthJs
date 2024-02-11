import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex  flex-col h-full  justify-center items-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-600 to-purple-600">
    {children}
  </div>;
};

export default AuthLayout;
