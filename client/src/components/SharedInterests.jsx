/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

import React from 'react'

export default function SharedInterests({sharedInterests}) {
  console.log('sharedInterests in SharedInterests Component: ', sharedInterests);
  return (
    <ul>
      {sharedInterests.map(interest => <li key = {interest}>{interest}</li>)}
    </ul>
  )
}