import React from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getOneBird } from "../../Services/birds";
import { Link } from "react-router-dom";
import { addCharacteristic } from "../../Services/characteristics";
import './BirdInfo.css';

export default function BirdInfo(props) {
  const [charId, setCharId] = useState("");
  const [bird, setBird] = useState(null);
  const { id } = useParams();
  const { currentUser, handleDelete, characteristics } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchOneBird = async () => {
      const birdData = await getOneBird(id);
      setBird(birdData);
    };
    fetchOneBird();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setCharId(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const birdData = await addCharacteristic(id, charId);
    setBird(birdData);
    history.push("/birds");
  };
  if (!bird) {
    return <></>
  }

  return (
    <div className='specBird'>
      <h1 id='birdy'>{bird?.name}</h1>
      <img id='picz' src={bird?.image_url} />
      <h2 id='birdStuff' >{bird?.description}</h2>
      <h3 id='breed'>Type: {bird?.type_of_bird}</h3>
      
      {bird.characteristics.map(bird => (
      <React.Fragment key={bird.id}>
          <p>{bird.name}</p>               
      </React.Fragment>
    ))}
      {currentUser?.id === bird?.user_id && (
        <>
          <Link to={`/birds/${bird?.id}/edit`}><button id='edit'>Edit</button></Link>
          
          <button id='delete' onClick={() => handleDelete(bird.id)}>delete</button>
          <form onSubmit={handleSubmit}>
        <select id='select' onChange={handleChange} defaultValue="default">
          <option disabled value="default">
            -- Select a characteristic --
          </option>
          {characteristics.map((characteristic) => (
            <option key={characteristic.id} value={characteristic.id}>
              {characteristic.name}
            </option>
          ))}
            </select>
            <br/>
        <button id='add'>add</button>
      </form>
        </>
      )}
      
    </div>
  );
}
