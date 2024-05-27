import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import styled from 'styled-components'
function App() {
  //const [time, setTime] = useState(1);
  


  // let SkyBox = styled.div`
  //   background : ${props => props.background};
  //   padding : 20px;
  //   margin : 10px;
  //   width : 400px;
  //   border-radius : 10px;
  // `;

  // const handleClock = () => {
  //   setTime(time + 1);
  // }

  // const currentTimer = () => {
  //   const date = new Date();
  //   const hours = String(date.getHours()).padStart(2, "0");
  //   const minutes = String(date.getMinutes()).padStart(2, "0");
  //   const seconds = String(date.getSeconds()).padStart(2, "0");
  //   setTime(`${hours}시${minutes}분${seconds}초`)
  // }
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }


  const handleAddTodo = () => {
    setTodos([...todos, inputValue]); // 배열에 새로운 항목 추가
    setInputValue(''); // 입력 필드 초기화
  }

  return (
    <>
      {/* <SkyBox background = "gold"/>
      <SkyBox background = "cyan"/>
      <SkyBox background = "pink"/>
      <SkyBox background = "blue"/>  */}
{/* 
      <div>
        <span> 현재 시간 : {time} </span>
        <button onClick={currentTimer}>Update</button>
      </div> */}

      <div>
        <h1>Todo List</h1>
        <input type = "text" placeholder = "Enter your todo" onChange={handleChange} value = {inputValue}></input>
        <button onClick={handleAddTodo}>Add Todo</button>
          {todos.map((item) => (
            <p key={item}>{item}</p>
          ))}
      </div>
    </>
  );
}

export default App;
