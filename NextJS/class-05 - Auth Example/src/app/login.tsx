"use client";

import { useState } from "react";
import { UserType } from "./usertype";

const users = [
  {
    email: "haider@gmail.com",
    password: "123456",
    userName: "haider ali",
    hobbies: ["swimming", "gardening"],
    post: [
      {
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe velit cum aspernatur numquam asperiores sunt vero eligendi ut ducimus rerum aperiam officiis necessitatibus consequuntur cupiditate, unde voluptates dolore eaque quo!",
        likes: 10,
      },
      {
        content:
          "ipsum Lorem  dolor sit amet consectetur adipisicing elit. Saepe velit cum aspernatur numquam asperiores sunt vero eligendi ut ducimus rerum aperiam officiis necessitatibus consequuntur cupiditate, unde voluptates dolore eaque quo!",
        likes: 15,
      },
    ],
  },
  {
    email: "abdullah@gmail.com",
    password: "123456",
    userName: "abdullah",
    hobbies: ["gym", "video games"],
    post: [
      {
        content:
          "special Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe velit cum aspernatur numquam asperiores sunt vero eligendi ut ducimus rerum aperiam officiis necessitatibus consequuntur cupiditate, unde voluptates dolore eaque quo!",
        likes: 100,
      },
      {
        content:
          "the quick ipsum Lorem  dolor sit amet consectetur adipisicing elit. Saepe velit cum aspernatur numquam asperiores sunt vero eligendi ut ducimus rerum aperiam officiis necessitatibus consequuntur cupiditate, unde voluptates dolore eaque quo!",
        likes: 1500,
      },
    ],
  },
];

type LoginType ={
    changeAuthStatus: (status: boolean)=>void;
    setUser: (user: UserType)=>void;
}

export default function Login({changeAuthStatus, setUser}: LoginType) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    let [userFound] = users.filter(
      (user) => user.email === email && user.password === password
    );

    if(userFound){
        changeAuthStatus(true);
        setUser(userFound);
    }
  };

  
  return (
    <>
      <label htmlFor="email">
        Emai:
        <input
          type="email"
          id="email"
          value={email}
          onChange={(ev) => {
            setEmail(ev.target.value);
          }}
        />
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input
          type="password"
          id="password"
          value={password}
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
        />
      </label>
      <br />
      <button onClick={loginHandler}>Login</button>
    </>
  );
}
