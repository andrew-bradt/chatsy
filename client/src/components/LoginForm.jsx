import React, {useState} from 'react'

export default function LoginForm({onClick}) {
  const [email, setEmail] = useState('');
  const peerId = Math.floor(Math.random()*100000);

  const login = (e) => {
    e.preventDefault();
    onClick(email, peerId);
  };
  
  return (
    <form>
      <input 
        type='email' 
        name='email' 
        placeholder='enter your email' 
        value = {email}
        onChange = {(e) => setEmail(e.target.value)}
      />
      <input type='submit' onClick = {login}/>
    </form>
  );
}