import React from 'react'
import Authentication from './Authentication'
import { Unauthentication } from './UnAuthentication'

export const App = () => {
  const token = false
  if(token) {
    return <Authentication/>
  }
  else {
    return <Unauthentication/>
  }
}
