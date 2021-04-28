import "./App.css";
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from "react-router-dom";
import Home from "./Screens/Home/Home.jsx";
import AllBirds from "./Screens/AllBirds/AllBirds";
import SignIn from "./Screens/SignIn/SignIn";
import SignUp from "./Screens/SignUp/SignUp";
import BirdByType from "./Screens/BirdByType/BirdByType";
import BirdCreate from "./Screens/BirdCreate/BirdCreate";
import BirdEdit from "./Screens/BirdEdit/BirdEdit";
import BirdInfo from "./Screens/BirdInfo/BirdInfo";
import Header from "./Shared/Header";
import Layout from './Shared/Layout';


import { loginUser, registerUser, removeToken, verifyUser } from './Services/auth';
import MainContainer from './Containers/MainContainer';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify()
  }, [])

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/')
  }

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/')
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }
  return (
    <div className="App">
      {/* <Header/>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/allbirds">
        <AllBirds />
      </Route>

      <Route path="/login">
        <SignIn />
      </Route>

      <Route path="/register">
        <SignUp />
      </Route>

      <Route path='/birdtype'>
        <BirdByType />
      </Route>

      <Route path='/createbird'>
        <BirdCreate />
      </Route>

      <Route path='/editbird'>
        <BirdEdit />
      </Route>

      <Route path='birdinfo'>
        <BirdInfo />
      </Route> */}

      <Header
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      <Switch>
        
          <Route path='/login'>
            <SignIn
              handleLogin={handleLogin}
            />
          </Route>
          <Route path="/register">
            <SignUp
              handleRegister={handleRegister}
            />
          </Route>
          <Route path='/'>
            <MainContainer
              currentUser={currentUser}
            />
          </Route>
        </Switch>
      {/* </Header> */}
    </div>
  );
}

export default App;
