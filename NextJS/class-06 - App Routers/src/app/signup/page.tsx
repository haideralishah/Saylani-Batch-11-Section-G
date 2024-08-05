"use client";

import AuthForm from "@/components/authform";
import Link from "next/link";

export default function Signup() {
  const signup = (email: string, password: string) => {
    console.log("This is signup function", email, password);
  };

  return (
    <>
      <AuthForm
        btnFunc={signup}
        btnLabel={"Signup"}
       />

      <p>
        Already have an account?
        <Link href="./login">Login here.</Link>
      </p>
    </>
  );
}
