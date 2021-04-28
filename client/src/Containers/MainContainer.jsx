// import { useState, useEffect } from 'react';
// import { Switch, Route, useHistory } from 'react-router-dom';


// import { getCharacteristics } from '../Services/characteristics'
// import { deleteBird, getAllBirds, postBird, putBird } from '../Services/birds'

// export default function MainContainer(props) {
//   const [birds, setBirds] = useState([]);
//   const [characteristics, setCharacteristics] = useState([]);
//   const history = useHistory();
//   const { currentUser } = props;

//   useEffect(() => {
//     const fetchCharacteristics = async () => {
//       const characteristicData = await getCharacteristics();
//       setCharacteristics(characteristicData);
//     }
//     fetchCharacteristics()
//   }, [])

//   useEffect(() => {
//     const fetchBirds = async () => {
//       const birdData = await getAllBirds();
//       setBirds(birdData);
//     }
//     fetchBirds()
//   }, [])

//   const handleCreate = async (formData) => {
//     const birdData = await postBird(formData);
//     setBirds(prevState => [...prevState, birdData])
//     history.push('/birds')
//   }

//   const handleEdit = async (id, formData) => {
//     const birdData = await putBird(id, formData);
//     setBirds(prevState => prevState.map(bird => {
//       return bird.id === Number(id) ? birdData : bird
//     }))
//     history.push('/birds')
//   }

//   const handleDelete = async (id) => {
//     await deleteBird(id);
//     setBirds(prevState => prevState.filter(bird => bird.id !== id))
//   }

//   return (
//     <Switch>
//       <Route path='/characteristics'>
//         <Characteristics
//           characteristics={characteristics}
//         />
//       </Route>
//       <Route path='/birds/:id/edit'>
//         <BirdEdit
//           birds={birds}
//           handleEdit={handleEdit}
//         />
//       </Route>
//       <Route path='/birds/new'>
//         <BirdCreate
//           handleCreate={handleCreate}
//         />
//       </Route>
//       <Route path='/birds/:id'>
//         <BirdDetail
//           characteristics={characteristics}
//         />
//       </Route>
//       <Route path='/birds'>
//         <Birds
//           birds={birds}
//           currentUser={currentUser}
//           handleDelete={handleDelete}
//         />
//       </Route>
//     </Switch>
//   )
// }