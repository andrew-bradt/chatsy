import React from 'react'
import authEndpoint from './config/oauth.config';

export default function Oauth() {
  return (
    <a href={authEndpoint}>oauth login</a>
  )
}
