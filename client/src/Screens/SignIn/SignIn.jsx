import React from 'react'
import { useState } from 'react';



export default function SignIn(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData;
  const {handleLogin} = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form className='form1' onSubmit={(e) => {
      e.preventDefault();
      handleLogin(formData)
    }}>
      <h3>Login</h3>
      <label>
        Username:
        <input
          id='input1'
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          id='input1'
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button id='formButt'>Submit</button>
    </form>
  )
}
