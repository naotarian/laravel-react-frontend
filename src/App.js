import logo from './logo.svg';
import './App.css';
import axios from './lib/axios'
import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Page1 from './page1'

function App() {
  const [email, setEmail] = useState('demo1@example.com')
  const [password, setPassword] = useState('password')
  axios.get('/sanctum/csrf-cookie').then(response => {
    // ログイン…
    console.log(response)
    let email = 'demo1@example.com'
    let password = 'password'
    const loginParams = { email, password }
    axios
      .post(
        'http://localhost:8080/login',
        loginParams
      )
      .then((response) => {
        console.log(response.data)
      })
  })
  const handleUserClick = () => {
    axios.get('http://localhost:8080/api/user').then((response) => {
      console.log(response.data)
    })
  }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <div>
    //       <button onClick={handleUserClick}>ユーザー情報を取得</button>
    //     </div>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
