import React from "react";
import { Link } from "react-router-dom";
import './AllBirds.css';

export default function AllBirds(props) {
  const { birds } = props;
  console.log(birds);
  return (
    <div className="allbird">
      <div id="title">
        <h3>birds</h3>
      </div>
      <div id='container'>

      {birds.map((bird) => (
        <React.Fragment key={bird.id}>
          <Link id='bird' to={`/birds/${bird.id}`}>
            <p id='bird-name'>{bird.name}</p>
            <img id='bird-img' src={bird.image_url} alt="bird" />
          </Link>
        </React.Fragment>
      ))}
      </div>
    </div>
  );
}
