import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getOneBird } from '../../Services/birds';
import { Link } from 'react-router-dom';


export default function BirdInfo(props) {
  const [bird, setBird] = useState(null);
  const { id } = useParams()
  
  
  useEffect(() => {
    const fetchOneBird = async () => {
      const birdData = await getOneBird(id);
      setBird(birdData)
    }
    fetchOneBird()
  }, [])
  
  return (
    <div>
      <h1>{bird?.name}</h1>
      <img src={bird?.image_url} />
      <h2>{bird?.description}</h2>
      <h3>{bird?.type_of_bird}</h3>
      <Link to={`/birds/${bird?.id}/edit`}>
        <button>
          Edit
      </button>
      </Link>
    </div>

  )
}
