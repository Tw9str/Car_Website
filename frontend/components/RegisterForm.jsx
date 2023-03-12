import React, { useState } from 'react';
import Link from 'next/link';
function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('https://car-website-api.vercel.app/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });
    // Handle the response from the server here
  };

  return (
      <div className="register">
        <form onSubmit={handleFormSubmit}>
          <input type="text" id="name" name="name" value={name} placeholder="Name" onChange={e => setName(e.target.value)} />
          <input type="email" name="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <input type="password" name="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
          {message && <p className='validation'>{message}</p>}
          <button type="submit">Register</button>
          <p>You have an accout? <Link href="/auth/login">Login</Link></p>
        </form>
      </div>
  );
}

export default RegisterForm;
