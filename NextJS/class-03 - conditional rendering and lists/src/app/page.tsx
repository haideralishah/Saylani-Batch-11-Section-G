/*
React.FC
React.ReactNode
*/

import Counter from "./counter";
import StudentsLists from "./studentslist";

const students = [
  {
    name: "haider",
    rollNum: 2643,
    feePaid: true,
  },
  {
    name: "abdullah",
    rollNum: 2644,
    feePaid: false,
  },
  {
    name: "muzammil",
    rollNum: 2645,
    feePaid: true,
  },
  {
    name: "Ahmed",
    rollNum: 2666,
    feePaid: false,
  },
];

export default function Home() {
  return (
    <>
      {
        students.map(({ name, rollNum, feePaid }, i) => (
          <StudentsLists 
            name={name} 
            rollNum={rollNum} 
            feePaid={feePaid} 
          />
        ))
      }

      <Counter message={"Counter App"} count={10} />
    </>
  );
}
