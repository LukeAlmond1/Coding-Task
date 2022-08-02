import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleLogin() {
    if (!email || !password) {
      setError("All fields need to be filled");
    } else if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setError("Please provide a real email");
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <div className="h-screen bg-stone-100 w-full flex items-center justify-center">
      <div className="w-1/2 py-12 bg-white rounded-md drop-shadow-xl flex flex-col items-center justify-center">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border rounded-md h-16 w-11/12 pl-4 text-lg outline-none focus:border-black"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          className="mt-4 border rounded-md h-16 w-11/12 pl-4 text-lg outline-none focus:border-black"
        />
        {error !== "" && (
          <p className="w-11/12 text-lg mt-3 ml-3 text-red-600 font-bold">
            {error}
          </p>
        )}
        <div className="w-11/12 flex justify-end mt-8">
          <button
            onClick={() => handleLogin()}
            className="py-4 px-12 text-lg self-end bg-black text-bold text-white rounded-md"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
