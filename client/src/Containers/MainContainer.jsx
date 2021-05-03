import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';


import { getCharacteristics } from '../Services/characteristics'
import { deleteBird, getAllBirds, postBird, putBird } from '../Services/birds'
import AllBirds from '../Screens/AllBirds/AllBirds';
import Home from '../Screens/Home/Home'
import BirdInfo from '../Screens/BirdInfo/BirdInfo'
import BirdCreate from '../Screens/BirdCreate/BirdCreate';
import BirdByType from '../Screens/BirdByType/BirdByType'
import BirdEdit from '../Screens/BirdEdit/BirdEdit';

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

  const handleEdit = async (id, formData) => {
    const birdData = await putBird(id, formData);
    setBirds(prevState => prevState.map(bird => {
      return bird.id === Number(id) ? birdData : bird
    }))
    history.push('/birds')
  }

  const handleCreate = async (formData) => {
    const birdData = await postBird(formData);
    setBirds(prevState => [...prevState, birdData])
    history.push('/birds')
  }

  const handleDelete = async (id) => {
    await deleteBird(id);
    setBirds(prevState => prevState.filter(bird => bird.id !== id))
    history.push('/birds')
  }
  
  

  return (
    <Switch>
      <Route exact path='/birds/type/:name'>
        <BirdByType
          birds={birds}/>
      </Route>
      <Route path='/birds/:id/edit'>
        <BirdEdit
          birds={birds}
          handleEdit={handleEdit}
        />
      </Route>
      <Route path='/birds/create'>
        <BirdCreate
          handleCreate={handleCreate}
        />
      </Route>
      <Route path='/birds/:id'>
        <BirdInfo
          characteristics={characteristics}
          currentUser={currentUser}
          handleDelete={handleDelete} />
          
      </Route>
      
      <Route path='/birds'>
        <AllBirds
          birds={birds}/>
      </Route>

      <Home/>
    </Switch>
  )
}