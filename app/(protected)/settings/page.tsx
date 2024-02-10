"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { logout } from "@/actions/logout";

import { Button } from "@/components/ui/button";

import React from "react";

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };
  return (
    <div className="bg-white p-10 rounded-xl">
     

      <Button onClick={onClick}>Sign Out</Button>
    </div>
  );
};

export default SettingsPage;
