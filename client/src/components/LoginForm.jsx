import React, {useState} from 'react'

export default function LoginForm({onSubmit}) {
  const [email, setEmail] = useState('');

  const login = e => {
    e.preventDefault();
    onSubmit(email);
  }
  
  return (
    <form onSubmit={login}>
      <input 
        type='email' 
        name='email' 
        placeholder='enter your email' 
        value = {email}
        onChange = {(e) => setEmail(e.target.value)}
      />
      <input type='submit'/>
    </form>
  );
}