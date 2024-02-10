"use client";

import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FaUser } from "react-icons/fa";
import { useCurrentUser } from "@/hooks/use-current-user";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import LogoutButton from "./logout-button";
import { ExitIcon } from "@radix-ui/react-icons";

const UserButton = ({}) => {
  const user = useCurrentUser();

  console.log(user?.image);
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-600 to-purple-600">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <LogoutButton>
          <DropdownMenuItem className="flex bg-white p-2 justify-center items-center shadow-md focus:outline-none rounded-md" >
            <ExitIcon className="h-4 w-4 mr-2"/>
            Logout</DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
