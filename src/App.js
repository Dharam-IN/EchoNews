import './App.css';
import Login_form from './Components/Login_form';
import Navbar_top from './Components/Navbar_top';
import Data_table from './Components/data_table';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login_form />} />
          <Route exact path="/attendance" element={<div><Navbar_top /><Data_table /></div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
