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

      <label> Image Url:
        <input
          type='text'
          name='image_url'
          value={image_url}
          onChange={handleChange}
        />
      </label>

      <label>Description:
        <input
          type='text'
          name='description'
          value={description}
          onChange={handleChange}
        />
      </label>

      <label>Name:
        <input
          type='text'
          name='type_of_bird'
          value={type_of_bird}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
