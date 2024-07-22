"use client";

import { useState } from "react";

type CounterType = {
  message: string;
  count: number;
};

export default function Counter({ message, count }: CounterType) {
  const [userName, setUserName] = useState("");
  const [initCount, setInitCount] = useState(count);

  const addHandler = () => {
    setInitCount(initCount + 1);
  };

  const changeHandler = (event: any) => {
    setUserName(event.target.value);
  };

  return (
    <>
      <h1>
        {message} {initCount}
      </h1>
      User Name:
      <input
        type="text"
        value={userName}
        // onChange={changeHandler}
        onChange={(event: any) => {
          setUserName(event.target.value);
        }}
      />
      <h2>Welcome {userName}</h2>
      <h3>{initCount}</h3>
      <button onClick={addHandler}>Add</button>
    </>
  );
}
