
import './App.css';

import Home from './pages/Home';
import Profile from './pages/Profile';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home /> }></Route>
          <Route path="Profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
