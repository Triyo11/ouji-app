"use client";

import { IoNotifications } from "react-icons/io5";
import Badge from "@mui/material/Badge";
import * as React from "react";
import { ModeToggle } from "@/components/Navbar/ModeToggle";
import DropdownUser from "@/components/Navbar/DropdownUser";
import { signIn, useSession } from "next-auth/react";

const UserActionButton = () => {
  const [invisibleBadge, setInvisibleBadge] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const { data: session } = useSession();

  return (
    <div className="grid grid-rows-1 grid-flow-col gap-8 items-center">
      <ModeToggle />
      <button
        onClick={() => setInvisibleBadge(!invisibleBadge)}
        aria-label="notifications"
      >
        <Badge variant="dot" color="error" invisible={invisibleBadge || !isLoggedIn}>
          <IoNotifications className="text-2xl" />
        </Badge>
      </button>
      {session?.user ? (
        <DropdownUser setIsLoggedIn={setIsLoggedIn} session={session}/>
      ) : (
        <div className="grid grid-rows-1 grid-flow-col gap-4 items-center">
          <button onClick={() => {
            signIn("github")
          }}>
            <span className="bg-[--accent] p-3 text-[var(--background)] dark:text-[var(--foreground)] font-semibold rounded-lg">Sign in</span>
          </button>
          <button>
            <span className="border-2 border-[--accent] text-[--accent] p-3 font-semibold rounded-lg">Sign up</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserActionButton;
