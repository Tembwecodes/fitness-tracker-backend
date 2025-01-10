// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <h1>Fitness Tracker</h1>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<div>Welcome to Fitness Tracker</div>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;