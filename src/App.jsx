// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/auth/Register';

function App() {
  return (
    <Router>
      <div>
        <h1>Fitness Tracker</h1>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;