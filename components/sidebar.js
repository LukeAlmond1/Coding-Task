import React from "react";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="h-screen fixed flex flex-col bg-stone-100 w-64 border items-center">
      <div
        onClick={() => router.push("/dashboard")}
        className={`${
          router.pathname === "/dashboard"
            ? "bg-black text-white"
            : "text-black"
        } mt-20 py-8 rounded-md cursor-pointer w-10/12 text-lg  h-8 flex items-center justify-center`}
      >
        Dashboard
      </div>
      <div
        onClick={() => router.push("/addsale")}
        className={`${
          router.pathname === "/addsale" ? "bg-black text-white" : "text-black"
        } mt-2 py-8 rounded-md cursor-pointer w-10/12 text-lg  h-8 flex items-center justify-center`}
      >
        Add sale
      </div>
      <div
        onClick={() => router.push("/login")}
        className={`absolute bottom-10 font-bold mt-2 py-8 rounded-md cursor-pointer w-10/12 text-lg  h-8 flex items-center justify-center`}
      >
        Logout
      </div>
    </div>
  );
}
