import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getOneBird } from '../../Services/birds';


export default function BirdInfo(props) {
  const [bird, setBird] = useState(null);
  const [charId, setCharId] = useState('')
  const { characteristics } = props;
  const { id } = useParams()
  

  useEffect(() => {
    const fetchOneBird = async () => {
      const birdData = await getOneBird(id);
      setBird(birdData)
    }
    fetchOneBird()
  }, [])

  const handleChange = (e) => {
    const { value } = e.target;
    setCharId(value)
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const birdData = await add
  // }
  return (
    <div>
      <h1>{bird?.name}</h1>
      <img src={bird?.image_url} />
      <h2>{bird?.description}</h2>
      <h3>{bird?.type_of_bird}</h3>
      
    </div>
  )
}
