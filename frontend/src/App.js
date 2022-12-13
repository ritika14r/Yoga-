import './App.css';
import Yoga from './Components/Yoga';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Schedule from './Components/Schedule';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Yoga />} />
          <Route exact path="/schedule" element={<Schedule />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
