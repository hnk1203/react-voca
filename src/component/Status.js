import { useState } from "react";
import UserName from "./UserName";

//props 선언한 부분으로 app.js 에 age={30} 이렇게 쓴 값이 들어온다

export default function Status(props) {
  console.log(props);
  // let name = "Mike";
  const [name, setName] = useState('Mike');
  const [age, setAge] = useState(props.age);
  const msg = age > 19 ? '성인' : '미성년';

  // function changeName() {
  //      // document.getElementById("name").innerText = name;
  //   // const newName = name === "Mike" ? "Jane" : "Mike";
  //   // setName(newName);
  //   setName(name === "Mike" ? "Jane" : "Mike");
  // }

  return (
    <div>
      <h2>컴포넌트의 역할</h2>
      <h3 id="name">{name}({age}세) : {msg}</h3>
      {/* <button onClick={changeName}>Change</button> */}
      <UserName name={name} />
      <button onClick={() => {
         setName(name === "Mike" ? "Jane" : "Mike");
         setAge(age+1);
      }}>Change</button>
    </div>
  );
}
