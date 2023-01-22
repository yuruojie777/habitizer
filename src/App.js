import logo from './logo.svg';
import './App.css';
import Home from './home/home';
import { HomePage } from './homepage';
import { Privacy } from './privacy';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {

  
  return (
    <Router>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
              <Route path="privacy" element={<Privacy/>}/>
      </Routes>
  </Router>
  );
}

export default App;
