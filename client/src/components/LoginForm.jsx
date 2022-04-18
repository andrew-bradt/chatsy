import React, {useState} from 'react'

export default function LoginForm({handleLogin}) {

  return (
    <form>
      <input type='email' name='email'/>
      <input type='text' name='peerId'/>
      <input type='submit' onClick={(e) => handleLogin(e)}/>
    </form>
  );
}