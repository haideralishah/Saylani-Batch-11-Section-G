"use client";

import { useState } from "react";
import UserTimeline from "./usertimeline";
import Login from "./login";
import { UserType } from "./usertype";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <>
      {isAuthenticated ? (
        <UserTimeline 
          userData={user}
        />
      ) : (
        <Login 
          changeAuthStatus={setIsAuthenticated} 
          setUser={setUser} 
        />
      )}
    </>
  );
}
