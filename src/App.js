
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('Light')

  const toggleMode = () => {
    if (mode === 'Light') {
        setMode('Dark');
        document.body.style.backgroundColor = 'black';
    }
    else {
        setMode('Light');
        document.body.style.backgroundColor = 'white';
    }
  };
  return (
    <>
    <Router>
    {/*<Navbar title="TextUtils" aboutText="About"/>*/}
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />


    <div className="container my-3" >
    <Routes>
          <Route exact path="/about" 
            element={<About mode={mode} />}>
          </Route>
          
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode}/>}>
          </Route>
    </Routes>
    </div>

    </Router>
    
    
    </>
  );
}

export default App;
