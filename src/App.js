import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Body from './Body';
import Dashboard from './Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">

    <BrowserRouter>

        <Navbar/>
        <Body/>
        {/* <Route exact path='' element={< Body />}></Route>
       <Route exact path='/dashboard' element={< Dashboard />}></Route> */}
       
{/*      
        <Route path='/dashboard' component={Dashboard} exact/> */}
         


    </BrowserRouter>

    </div>
  );
}

export default App;
