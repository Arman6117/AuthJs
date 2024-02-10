import React from "react";
import Navbar from "./_component/Navbar";
interface ProtectedLayoutProps {
  children: React.ReactNode;
}
const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="h-screen w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-600 to-purple-600">
        <Navbar/>
      {children}
    </div>
  );
};

export default ProtectedLayout;
