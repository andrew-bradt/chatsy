import React from 'react'
import axios from 'axios';

const oauth = () => {
  axios.get('/oauth')
    .then(res => {
      console.log(res.data);
    });
}
export default function Oauth() {
  return (
    <button onClick = {oauth}>oauth</button>
  )
}
