import React from 'react'
import { Link } from 'react-router-dom';



export default function AllBirds(props) {
  const { birds } = props;
  console.log(birds);
  return (
    <div>
    <h3>birds</h3>
    {birds.map(bird => (
      <React.Fragment key={bird.id}>
        <Link to={`/birds/${bird.id}`}>
          <p>{bird.name}</p>
        </Link>
      </React.Fragment>
    ))}
    <br />
    <Link to='/birds/new'><button>create</button></Link>
  </div>
  )
}
