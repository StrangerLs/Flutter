import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {typeBird} from "../../Services/birds";

export default function BirdByType(props) {
  const [birdy, setBirdy] = useState([{}])
  const { birds } = props;
  const { name } = useParams()

  

  useEffect(() => {
    const birdType = async () => {
      const birdData = await typeBird(name)
      setBirdy(birdData)
      
    }
    birdType()
    
  }, [name])
  if (!birdy.data) {
    return <></>
  }
  console.log(birdy.data[0]);

  return (
    <div>
      <h1>{name}'s</h1>
    {birdy.data.map(bird => (
      <React.Fragment key={bird.id}>
        <Link to={`/birds/${bird.id}`}>
          <p>{bird.name}</p>
        <img src={bird.image_url} alt='bird'/>
        </Link>
      </React.Fragment>
    ))}
    </div>
    )
    
}
