import { Routes, Route } from 'react-router';
import './App.scss';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { Spinner } from './Components/Spinner/Spinner';
import { NotFound } from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Spinner/>
      <Routes>
        <Route path="/"        element={<Home />}       />
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
