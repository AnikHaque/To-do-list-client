import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Navbar } from './components/navbar/Navbar';
import { Records } from './components/records/Records';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
       <Routes>
   <Route path="/" element={<Home></Home>} />
   <Route path="/records" element={<Records></Records>} />
   

   </Routes>
    </div>
  );
}

export default App;
