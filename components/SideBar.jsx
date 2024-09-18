"use client";

import { Logout } from "@mui/icons-material";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  const pathname = usePathname();

  const handleLogout = async () => {
    signOut({ callbackUrl: "/" });
  };

  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="sidebar">
        <div>
            <Link href="/chats">
            <h1>Chatapp</h1>
            {/* <img src="/assets/logo.png" alt="logo" className="logo" /> */}
        </Link>
        </div>
        <div>
            <Link
            href="/chats"
            className={`${
                pathname === "/chats" ? "text-red-1" : ""
            } text-heading4-bold`}
            >
            Chats
            </Link>
        </div>        
        <div>
            <Link
            href="/contacts"
            className={`${
                pathname === "/contacts" ? "text-red-1" : ""
            } text-heading4-bold`}
            >
            Contacts
            </Link>
        </div>
        <div>
            <Link
            href="/chatbot"
            className={`${
                pathname === "/chatbot" ? "text-red-1" : ""
            } text-heading4-bold`}
            >
            Chat with AI
            </Link>
        </div>
        <div>
            
            <Logout
            
            sx={{ color: "#737373", cursor: "pointer" }}
            onClick={handleLogout}
            />
        </div>
    </div>
  );
};

export default SideBar;