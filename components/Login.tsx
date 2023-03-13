"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-white h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://aleph-m-2.s3.amazonaws.com/aleph-logo.png"
        width={300}
        height={300}
        alt="logo"
      />
      <button
        onClick={() => signIn("google")}
        className="text-[#800080] font-bold text-3xl animate-pulse"
      >
        Sign in to use Aleph
      </button>
    </div>
  );
}

export default Login;
