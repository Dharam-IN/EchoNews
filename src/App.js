import './App.css';
import Login_form from './Components/Login_form';
import Atta_page from './Components/Atta_page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login_form />} />
          <Route exact path="/attendance" element={<Atta_page />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
