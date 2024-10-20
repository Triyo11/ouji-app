"use client";

import { useAuth } from "@/services/auth-services";
import Image from "next/image";
import { PiGearFill } from "react-icons/pi";
import { IoNotifications } from "react-icons/io5";
import { BsChatRightTextFill } from "react-icons/bs";
import { FaListCheck } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import Badge from "@mui/material/Badge";
import { useState } from "react";
import OverlayPanelSetting from "./OverlayPanelSetting";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { Icon } from "@mui/material";

const Sidebar = () => {
  const [invisibleBadgeNotification, setInvisibleBadgeNotification] =
    useState(false);
  const [invisibleBadgeMessage, setInvisibleBadgeMessage] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(1);
  // jika menggunakan useAuth() harus menggunakan use client
  const user = useAuth();
  const router = useRouter();

  const menus = [
    { id: 1, label: "Tasks", Icon: <FaListCheck />, href: "/dashboard" },
    { id: 2, label: "Calendar", Icon: <FaCalendarAlt />, href: "/dashboard" },
  ];

  return (
    <div className="sticky top-0 h-auto max-w-max p-4 flex flex-col items-center justify-between bg-scheme-1-foreground m-2 rounded-xl">
      <div className="flex flex-col items-center gap-8">
        <Image
          src={user?.image ?? ""}
          alt="avatar"
          width={30}
          height={30}
          className="rounded-full border border-scheme-1-background"
        />
        <div className="absolute top-16 right-0 left-0 flex flex-col items-center gap-4">
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
      <div className="flex flex-col gap-4 items-center">
        {menus.map((menu) => (
          <button
            key={menu.id}
            onClick={() => {
              setActiveMenu(menu.id);
              router.push(menu.href);
            }}
            className={clsx(
              "text-2xl p-1 rounded-lg",
              "transition-all ease-in-out duration-300",
              activeMenu === menu.id
                ? "text-scheme-1-foreground bg-scheme-1-background"
                : "text-scheme-1-background bg-scheme-1-background/0"
            )}
          >
            {menu.Icon}
          </button>
        ))}
      </div>
      <div className="relative">
        <OverlayPanelSetting show={showSettings} setShow={setShowSettings} />
        <button onClick={() => setShowSettings(!showSettings)} onBlur={() => setShowSettings(!showSettings)}>
          <PiGearFill className="text-2xl text-scheme-1-background" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
