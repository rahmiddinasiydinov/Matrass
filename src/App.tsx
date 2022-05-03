import React, { useState } from 'react';
import { Routes, Route } from 'react-router';
import './App.scss';
import Home from './Pages/Home/Home';
import {Spinner} from './Components/Spinner/Spinner'
function App() {
  const [load, setLoad] = useState<boolean>(false);
  const handleLoad = () => setLoad(true);
  console.log(load);
  
  return (
    <div className="App" onLoad={handleLoad}>
      <Spinner loaded={load}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;
