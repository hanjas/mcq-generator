import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import MainPage from "./components/MainPage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={ <Home/> } />
        <Route path="/" element={ <Login/> } />
        <Route path="/main" element={ <MainPage/> } />
      </Routes>
    </div>
  )
}

export default App