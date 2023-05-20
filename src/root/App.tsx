import React, { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import TopAppBar from '../components/topAppBar/TopAppBarComponent';
import NavBar from '../components/navBarComponent/NavBarComponent';
import MainPage from '../components/mainPage/MainPageComponent';
import NotFoundPage from '../components/notFoundPage/NotFoundPage';
import { Routes, Route, NavLink } from 'react-router-dom';

const App = () =>{
  const [workers, setWorkers] = useState([]);
  const sendReq = () => {
    axios.get('https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all')
    .then((response) => {
      const people = response.data.items;
      setWorkers(people);
    });
  }

  return (
    <div className="App">
      <TopAppBar/>
      <NavBar/>
      <Routes>
        {/* <Route path='/' element={<MainPage workers: string[]={workers: string[]}/>} /> */}
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </div>
  );
}

export default App;
