import React from "react";
import { Link } from "react-router-dom";
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { typeBird } from '../../Services/birds';

export default function BirdByType(props) {
  // const [type, setType] = useState('')
  // const { name } = useParams()

  
  return (
    <div>
      <h1>This will show birds by specific type</h1>
      <Link to={`/birds/type/Macaw`}> Macaw </Link>
      <Link to={`/birds/type/African-Grey`}>African Grey</Link>
      <Link to={`/birds/type/Cockatoo`}>Cockatoo</Link>
      <Link to={`/birds/type/Conure`}>Conure</Link>
    </div>
  );
}
