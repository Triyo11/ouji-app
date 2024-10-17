"use client";

import { useAuth } from "@/services/auth-services";
import Image from "next/image";
import { PiGearFill } from "react-icons/pi";
import { IoNotifications } from "react-icons/io5";
import { BsChatRightTextFill } from "react-icons/bs";
import Badge from "@mui/material/Badge";
import { useState } from "react";
import OverlayPanelSetting from "./OverlayPanelSetting";

const Sidebar = () => {
  const [invisibleBadgeNotification, setInvisibleBadgeNotification] =
    useState(false);
  const [invisibleBadgeMessage, setInvisibleBadgeMessage] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  // jika menggunakan useAuth() harus menggunakan use client
  const user = useAuth();

  return (
    <div className="absolute top-0 left-0 h-screen max-w-max p-4 flex flex-col items-center justify-between bg-scheme-1-foreground">
      <div className="flex flex-col items-center gap-8">
        <Image
          src={user?.image ?? ""}
          alt="avatar"
          width={30}
          height={30}
          className="rounded-full border border-scheme-1-background"
        />
        <div className="flex flex-col items-center gap-4">
          <button
            className={`${!user ? "hidden" : ""}`}
            onClick={() =>
              setInvisibleBadgeNotification(!invisibleBadgeNotification)
            }
            aria-label="notifications"
          >
            <Badge
              variant="dot"
              color="error"
              invisible={invisibleBadgeNotification}
            >
              <IoNotifications className="text-2xl text-scheme-1-background" />
            </Badge>
          </button>
          <button
            className={`${!user ? "hidden" : ""}`}
            onClick={() => setInvisibleBadgeMessage(!invisibleBadgeMessage)}
            aria-label="messages"
          >
            <Badge
              variant="dot"
              color="error"
              invisible={invisibleBadgeMessage}
            >
              <BsChatRightTextFill className="text-xl text-scheme-1-background" />
            </Badge>
          </button>
        </div>
      </div>
      <div className="relative">
        <OverlayPanelSetting show={showSettings} setShow={setShowSettings} />
        <button onClick={() => setShowSettings(!showSettings)}>
          <PiGearFill className="text-2xl text-scheme-1-background" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
