import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comment from './Comment'
import CommentList from './CommetList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Comment name="김가은" commet="소웨과"></Comment> */}
      <CommentList></CommentList>
    </>
  )
}

export default App
