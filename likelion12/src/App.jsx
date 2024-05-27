import { Profiler, useState } from 'react'
import Profile from './Profile'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Profile
        name = "김가은"
        introduction = "안녕하세요. 김가은입니다."
        viewCount = {1500}
      />
      <Profile
        name = "한가한"
        introduction = "안녕하세요. 한가한입니다."
        viewCount = {2500}
      />
      <Profile
        name = "남궁민수"
        introduction = "안녕하세요. 남궁민수입니다."
        viewCount = {3000}
      />
    </>
    
  );
}

export default App
