import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as util_request from './request/util.request'
import * as websocket_client from './request/client.websocket'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './login'
import List from './list'

function App() {
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState("");

  util_request.getTitle().then(result => {
    console.log(title)
    setTitle(result);
  })

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<>
              <div>
                <a href="https://vitejs.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
              </div>
              <h1>{title}</h1>
              <div className="card">
                <button onClick={() => {
                  setCount((count) => count + 1);
                  websocket_client.send("Current Count is: " + count);
                }}>
                  你已经点了 {count} 次按钮了
                </button>
              </div>
              <p className="read-the-docs">
                请点击下方“登录”字样进行登录
              </p>
              <div>
                <nav>
                  <Link to="/login">登录</Link>
                </nav>
              </div>
            </>}/>

            <Route path="/login" element={<Login/>}/>
            <Route path="/list" element={<List/>}/>    
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
