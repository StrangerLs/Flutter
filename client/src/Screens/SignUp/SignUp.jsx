import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const { username, email, password } = formData;
  const { handleRegister } = props;
  const history = useHistory()
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
      handleRegister(formData)
      history.push('/birds/create')
      }}>
        <h3>Sign Up!</h3>
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
        Email:
        <input
          id='input1'
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Password:
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
