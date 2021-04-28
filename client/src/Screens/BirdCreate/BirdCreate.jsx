import React from 'react'
import { useState } from 'react';

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
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData);
    }}>
      <h3>Add your bird!</h3>
      <label>Name:
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </label>
      <br/>
      <label> Image Url:
        <input
          type='text'
          name='image_url'
          value={image_url}
          onChange={handleChange}
        />
      </label>
      <br/>
      <label>Description:
        <input
          type='text'
          name='description'
          value={description}
          onChange={handleChange}
        />
      </label>
      <br/>
      <label>Bird Type:
        <select
          defaultValue='default'
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
      <br/>
      <button>Submit</button>
    </form>
  )
}
