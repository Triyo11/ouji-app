import { signOut } from "next-auth/react";

const settingOptions = [
  {
    label: "Sign out",
    type: "method",
    action: () => signOut(),
  },
];

export default settingOptions