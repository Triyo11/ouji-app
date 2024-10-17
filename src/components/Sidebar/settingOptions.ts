import { signOut } from "next-auth/react";

const settingOptions = [
  {
    label: "Projects",
    type: "direction",
    href: "/project",
  },
  {
    label: "Sign out",
    type: "method",
    action: () => signOut(),
  },
];

export default settingOptions