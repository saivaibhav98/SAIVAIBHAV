import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // Hook to navigate to other pages

  const handleSubmit = () => {
    // You can add validation logic here if needed
    if (password === confirmPassword) {
      alert(`Account created for ${name}`);
      navigate('/'); // Navigate to the login page or any other desired route
    } else {
      alert('Passwords do not match.');
    }
  };

  return (
    <div style={{ backgroundColor: 'yellow', padding: '20px' }}>
      <div style={{ color: 'red', fontSize: '24px', fontWeight: 'bold' }}>Create Account</div>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div>
        <label>Email ID:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input 
          type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
        />
      </div>
      <button
        onClick={handleSubmit} // Call handleSubmit on button click
        style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Submit
      </button>
    </div>
  );
}

export default CreateAccount;
