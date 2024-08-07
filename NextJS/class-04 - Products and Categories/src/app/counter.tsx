"use client";

import { useState } from "react";

type CounterType = {
  message: string;
  count: number;
};

type UserType = {
  name: string;
  rollNum: number
}
type ErrorType = {
  type: "error" | "warning",
  errorMsg: string
}

export default function Counter({ message, count }: CounterType) {
  const [userName, setUserName] = useState("");
  const [initCount, setInitCount] = useState(count);
  const [error, setError] = useState<ErrorType>({
    type:'error',
    errorMsg: "You are not listed in our system."
  });


  const addHandler = () => {
    setInitCount(initCount + 1);
  };

  const changeHandler = (event: any) => {
    setUserName(event.target.value);
  };
  
  const toggleErrorHandler = ()=>{
    if(error.type === 'error'){
      setError({
        type: 'warning',
        errorMsg: 'please wear your id card.'
      });
    }
    else{
      setError({
        type: 'error',
        errorMsg: "You are not listed in our system."
      });
    }
  }


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

        {
          userName.length >= 3 ? 
          <h2>Welcome {userName}</h2> : 
          <h2>Please enter your name</h2>
        }

        <p style={
          error.type === "error"?
          {backgroundColor: 'red', color: 'white'}:
          {backgroundColor: 'yellow', color: 'red'}
        }>
          {error.errorMsg}
        </p>
        <button onClick={toggleErrorHandler}>Toggle Error</button>

      <h3>{initCount}</h3>
      <button onClick={addHandler}>Add</button>
    </>
  );
}
