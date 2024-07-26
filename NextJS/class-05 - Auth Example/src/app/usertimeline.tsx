"use client";

import Greet from "./greet";
import Hobbies from "./hobbies";
import { UserType } from "./usertype";

type UserTimelineType = {
  userData: (UserType | null);
};

export default function UserTimeline({userData}: UserTimelineType) {
    console.log(userData);
  return (
            <>
                <Greet
                    userName={userData?.userName}
                />

                <Hobbies 
                    hobbies={userData?.hobbies}
                />

            </>
    );
}
