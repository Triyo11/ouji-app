"use client";

import { useRouter } from "next/navigation";
import { HiOutlineArrowLeft } from "react-icons/hi";

export const BackButton = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()}>
      <HiOutlineArrowLeft className="text-lg md:text-2xl" />
    </button>
  );
};
