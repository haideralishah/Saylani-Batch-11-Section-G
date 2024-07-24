"use client";


import HelloWorld from "./helloworld";


export default function Home() {
  const signup = ()=>{
    console.log('signup func');
  }

  const login = ()=>{
    console.log('login func');
  }

  const forgetPassword = ()=>{
    console.log('forgetPassword func');
  }

  return (
    <>
      <HelloWorld
        greet={"Assalamuaalikum"}
        message="the quick brown fox jumps over the lazy dog."
        btnLabel="Signup"
        handerFunc={signup}
      />

      <HelloWorld
        greet="Eid Mubarak"
        message="Eidi lete aana"
        btnLabel="Login"
        handerFunc={login}
      />

      <HelloWorld 
        greet="Hi"
        message="How may I help you?"
        btnLabel="Forget Password"
        handerFunc={forgetPassword}
      />
    </>
  )
}