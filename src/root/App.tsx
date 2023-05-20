import React, { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import TopAppBar from '../components/topAppBar/TopAppBarComponent';
import NavBar from '../components/navBarComponent/NavBarComponent';
import MainPage from '../components/mainPage/MainPageComponent';
import NotFoundPage from '../components/notFoundPage/NotFoundPage';
import Preloader from '../components/preloader/PreloaderComponent';
import { Routes, Route, NavLink } from 'react-router-dom';
import { resolve } from 'node:path/posix';

const App = () =>{
  const [stateOfPreloader, setStateOfPreloader] = useState(true);

  useEffect( () => {
    setTimeout( ()=> {
      setStateOfPreloader(!stateOfPreloader);
    }, 6000)
  }, []);

  const [workers, setWorkers] = useState([]);
  const sendReq = () => {
    axios.get('https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all')
    .then((response) => {
      const people = response.data.items;
      setWorkers(people);
    });
  }

  const routes =
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>

  return (
    <div className="App">
      <TopAppBar/>
      <NavBar/>
      {stateOfPreloader? <Preloader /> : routes}
    </div>
  );
}

export default App;
