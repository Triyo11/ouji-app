"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export const BackButton = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()}>
      <FaArrowLeft className="text-3xl" />
    </button>
  );
};
