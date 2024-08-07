type StudentsProps = {
  name: string;
  rollNum: number;
  feePaid: boolean;
};

export default function StudentsLists({
  name,
  rollNum,
  feePaid,
}: StudentsProps) {
  return (
    <div style={{backgroundColor:'pink'}}>
      <h1>{name}</h1>
      <h3>{rollNum}</h3>
      {
        feePaid ? 
        <p>Your fee is paid.</p> :
        <p style={{color: '#ff0000'}}>Please clear your dues.</p>
       }
    </div>
  );
}
