import React from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getOneBird } from "../../Services/birds";
import { Link } from "react-router-dom";
import { addCharacteristic } from "../../Services/characteristics";

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

  return (
    <div>
      <h1>{bird?.name}</h1>
      <img src={bird?.image_url} />
      <h2>{bird?.description}</h2>
      <h3>{bird?.type_of_bird}</h3>
      
      {currentUser?.id === bird?.user_id && (
        <>
          <Link to={`/birds/${bird?.id}/edit`}><button>Edit</button></Link>
          
          <button onClick={() => handleDelete(bird.id)}>delete</button>
          <form onSubmit={handleSubmit}>
        <select onChange={handleChange} defaultValue="default">
          <option disabled value="default">
            -- Select a characteristic --
          </option>
          {characteristics.map((characteristic) => (
            <option key={characteristic.id} value={characteristic.id}>
              {characteristic.name}
            </option>
          ))}
        </select>
        <button>add</button>
      </form>
        </>
      )}
      
    </div>
  );
}
