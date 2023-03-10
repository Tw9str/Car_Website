import { useState } from 'react';
import { setLogin } from '@/state';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  function handleFormSubmit(e) {
    e.preventDefault();

    // Basic validation
    if (!email) {
      setMessage('Please enter your email');
      return;
    }
    if (!password) {
      setMessage('Please enter your password');
      return;
    }

    const user = {
      email,
      password
    };

    fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setMessage(data.message);
          dispatch(setLogin({
            user: data.user,
            token: data.token,
          }))
          router.push("/");
        } else {
          setMessage(data.message);
        }})
      .catch(error => {
        console.error(error);
      });
  }
  
  return (
      <div className="login">
        <form onSubmit={handleFormSubmit}>
          <input type="email" name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          {message && <p className='validation'>{message}</p>}
          <button type="submit">Sign in</button>
          <p>You don&apos;t have an accout? <Link href="/auth/register">Register</Link></p>
        </form>
      </div>
  );
}

export default LoginForm;
