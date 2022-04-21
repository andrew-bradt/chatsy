/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

import React from 'react'

export default function SharedInterests({sharedInterests}) {
  return (
    <li>
      {sharedInterests.map(interest => <li key = {interest}>{interest}</li>)}
    </li>
  )
}