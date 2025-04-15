import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Landing() {
  const naviagte = useNavigate();

  function gotologin () {
    naviagte('/login');
  }
  return (
    <div>
        hoo
        <button onClick={gotologin}>Click me</button>
    </div>
  )
}

export {Landing}