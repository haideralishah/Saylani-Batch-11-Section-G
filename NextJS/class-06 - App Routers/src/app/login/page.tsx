"use client";

import AuthForm from "@/components/authform";
import Link from "next/link";

export default function Login() {
  const login = (email: string, password: string) => {
    console.log("This is login function", email, password);
  };

  return (
    <>
      <AuthForm 
        btnLabel={"Login"} 
        btnFunc={login} 
      />

      <p>
        Do not have an account?
        <Link href="./signup">Sign up here.</Link>
      </p>
    </>
  );
}
