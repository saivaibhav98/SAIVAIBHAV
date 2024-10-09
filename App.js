import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import CreateAccount from './signup'; // Import CreateAccount component from signup.js
import MyComponent from './dashboard'; // Import your dashboard component

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook to navigate to other pages

  const handleLogin = () => {
    if (username && password) {
      alert(`Logging in as ${username}`); // You can replace this with actual login logic
      navigate('/dashboard'); // Navigate to the dashboard upon successful login
    } else {
      alert('Please enter both username and password.');
    }
  };

  const handleCreateAccount = () => {
    navigate('/create-account'); // Navigate to the create account page when "Create Account" is clicked
  };

  return (
    <div style={{ backgroundColor: 'yellow', padding: '20px', minHeight: '100vh' }}>
      {/* Form inputs */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px', borderRadius: '5px', border: '1px solid gray' }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginLeft: '12px', padding: '5px', borderRadius: '5px', border: '1px solid gray' }}
          />
        </div>
      </div>

      {/* Login button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
        <button
          onClick={handleLogin}
          style={{
            backgroundColor: 'red',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </div>

      {/* Create Account button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
        <button
          onClick={handleCreateAccount}
          style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccount />} /> {/* Route for Create Account page */}
        <Route path="/dashboard" element={<MyComponent />} /> {/* Route for dashboard */}
      </Routes>
    </Router>
  );
}

export default App;
