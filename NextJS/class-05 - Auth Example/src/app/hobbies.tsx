type HobbiesType = {
  hobbies?: string[];
};
export default function Hobbies({ hobbies }: HobbiesType) {
  console.log(hobbies);

  return (
    <ul>
      {hobbies?.map((hobby, i) => (
        <li>{hobby}</li>
      ))}
    </ul>
  );
}
