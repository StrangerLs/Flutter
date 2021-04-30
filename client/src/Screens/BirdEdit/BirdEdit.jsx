import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function BirdEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
    image_url: '',
    description: '',
    type_of_bird: '' 
  })

  const { name, image_url, description, type_of_bird } = formData;
  const { birds, handleEdit } = props;
  const { id } = useParams()
  
  useEffect(() => {
    const prefillFormData = () => {
      const birdy = birds.find(bird => bird.id === Number(id))
      setFormData({
        name: birdy?.name,
        image_url: birdy?.image_url,
        description: birdy?.description,
        type_of_bird: birdy?.type_of_bird
      })
    }
    if (birds.length) {
      prefillFormData();
    }
  }, [birds])

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
      handleEdit(id, formData);
    }}>
      <h1>Edit Bird</h1>
      <label>Name:
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Image Url:
        <input
          type='text'
          name='image_url'
          value={image_url}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Description:
        <input
          type='text'
          name='description'
          value={description}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Bird Type:
        <select
          name='type_of_bird'
          value={type_of_bird}
          onChange={handleChange}
        >
          <option>Macaw</option>
          <option>African Grey</option>
          <option>Conure</option>
          <option>Cockatoo</option>
          </select>
      </label>
      <br />
      <button>Submit</button>
    </form>
  )
}
