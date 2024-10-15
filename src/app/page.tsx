"use client";

import Navbar from "../components/Navbar";
import { redirect } from "next/navigation";
import { useAuth } from "@/services/auth-services";
import { useEffect } from "react";

export default function Home() {
  // if user is authenticated, redirect to dashboard
  const user = useAuth();
  
  useEffect(() => {
    if (user) {
      redirect("/dashboard");
    }
  }, [user])

  return (
    <>
      <Navbar />
      <div className="">
        <h1>Hello World</h1>
      </div>
    </>
  );
}
