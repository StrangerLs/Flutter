import React from 'react'
import { useState } from 'react';
import './BirdCreate.css'



export default function BirdCreate(props) {
  
  const [formData, setFormData] = useState({
    name: '',
    image_url: '',
    description: '',
    type_of_bird: '' 
    
  })
  const { name, image_url, description, type_of_bird } = formData;
  const { handleCreate } = props;


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
      
      handleCreate(formData);
      
    }}>
      <div className='inputs'>

      <h3>Add your bird!</h3>
      <label>Name:
        <input
            id='input1'
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </label>
      <br/>
      <label> Image Url:
        <input
            id='input2'
          type='text'
          name='image_url'
          value={image_url}
          onChange={handleChange}
        />
      </label>
      <br/>
      <label>Description:
        <input
            id='input3'
          type='text'
          name='description'
          value={description}
          onChange={handleChange}
        />
      </label>
      <br/>
      </div>
      <label>Bird Type:
        <select
          // defaultValue='default'
          id='dropper'
          name='type_of_bird'
          value={type_of_bird}
          onChange={handleChange}
        >
          <option disabled value='default'>-- Select bird --</option>
          <option>Macaw</option>
          <option>Conure</option>
          <option>Cockatoo</option>
          <option>African Grey</option>
        </select>
      </label>
      <br />
      <button id='formButt'>Submit</button>
    </form>
  )
}
