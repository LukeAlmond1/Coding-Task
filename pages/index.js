import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex h-screen w-screen items-center justify-center flex-col">
      <h1 className="text-6xl font-bold">
        Welcome, please use the links below
      </h1>
      <div className="flex mt-6 gap-x-6">
        <button
          onClick={() => router.push("/login")}
          className="text-2xl border-2 border-black py-4 px-10 rounded-md hover:bg-black hover:text-white"
        >
          Login
        </button>
        <button
          onClick={() => router.push("/addsale")}
          className="text-2xl border-2 border-black py-4 px-10 rounded-md hover:bg-black hover:text-white"
        >
          Add Sales
        </button>
        <button
          onClick={() => router.push("/dashboard")}
          className="text-2xl border-2 border-black py-4 px-10 rounded-md hover:bg-black hover:text-white"
        >
          Dashboard
        </button>
      </div>
    </div>
  );
}
