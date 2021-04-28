import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';


import { getCharacteristics } from '../Services/characteristics'
import { deleteBird, getAllBirds, postBird, putBird, getOneBird } from '../Services/birds'
import AllBirds from '../Screens/AllBirds/AllBirds';
import Home from '../Screens/Home/Home'
import BirdInfo from '../Screens/BirdInfo/BirdInfo'
export default function MainContainer(props) {
  const [birds, setBirds] = useState([]);
  const [characteristics, setCharacteristics] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchCharacteristics = async () => {
      const characteristicData = await getCharacteristics();
      setCharacteristics(characteristicData);
    }
    fetchCharacteristics()
  }, [])

  useEffect(() => {
    const fetchBirds = async () => {
      const birdData = await getAllBirds();
      setBirds(birdData);
    }
    fetchBirds()
  }, [])

  return (
    <Switch>
      <Route path='/birds/:id'>
        <BirdInfo
          characteristics={characteristics}/>
      </Route>
      
      <Route path='/birds'>
        <AllBirds
          birds={birds}/>
      </Route>

      <Home/>
    </Switch>
  )
}