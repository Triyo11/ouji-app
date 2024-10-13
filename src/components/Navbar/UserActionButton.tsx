"use client";

import { IoNotifications } from "react-icons/io5";
import Badge from "@mui/material/Badge";
import { useState } from "react";
import { ModeToggle } from "@/components/Navbar/ModeToggle";
import DropdownUser from "@/components/Navbar/DropdownUser";
import { useAuth } from "@/services/auth-services";
import DirectButton from "../Button/DirectButton";

const UserActionButton = () => {
  const [invisibleBadge, setInvisibleBadge] = useState(false);

  const user = useAuth();

  return (
    <div className="grid grid-rows-1 grid-flow-col gap-8 items-center">
      <ModeToggle />
      <button
        className={`${!user ? "hidden" : ""}`}
        onClick={() => setInvisibleBadge(!invisibleBadge)}
        aria-label="notifications"
      >
        <Badge variant="dot" color="error" invisible={invisibleBadge}>
          <IoNotifications className="text-2xl" />
        </Badge>
      </button>
      {user ? (
        <DropdownUser user={user} />
      ) : (
        <div className="grid grid-rows-1 grid-flow-col gap-1 items-center">
          <DirectButton url="/login" label="Sign in" />
          <DirectButton url="/" label="Sign up" />
        </div>
      )}
    </div>
  );
};

export default UserActionButton;
