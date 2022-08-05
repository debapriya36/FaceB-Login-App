import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Navbar';
import Body from './Body';
import Dashboard from './Dashboard';



export default function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route exact path='' element={< Body />}></Route>
        <Route exact path='/dashboard' element={< Dashboard />}></Route> 
        </Routes>
        </BrowserRouter>

    </div>
  );
}


