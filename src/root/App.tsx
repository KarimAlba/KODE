import React, { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import TopAppBar from '../components/topAppBar/TopAppBarComponent';
import NavBar from '../components/navBarComponent/NavBarComponent';
import MainPage from '../components/mainPage/MainPageComponent';
import NotFoundPage from '../components/notFoundPage/NotFoundPage';
import Preloader from '../components/preloader/PreloaderComponent';
import { Routes, Route, NavLink } from 'react-router-dom';
import { send } from 'process';
import Modal from '../components/modalWindow/ModalWindowComponent';

const App = () =>{
  const [stateOfPreloader, setStateOfPreloader] = useState(true);

  useEffect( () => {
    setTimeout( ()=> {
      setStateOfPreloader(!stateOfPreloader);
    }, 6000)
  }, []);

  const [workers, setWorkers] = useState([]);
  
  const sendReq = async () => {
    const responce = await axios.get('https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all');
    const employee = await responce.data.items;
    return employee;
  }

  useEffect(() => {
    sendReq();
  }, 
  [])

  const [stateOfModal, setStateOfModal] = useState(false);
  const getStateOfModal = () => {setStateOfModal(!stateOfModal)}

  const routes =
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>

  return (
    <div className="App">
      <TopAppBar getStateOfModal={getStateOfModal}/>
      <NavBar/>
      {stateOfModal? <Modal getStateOfModal={getStateOfModal} />: null}
      {/* {stateOfPreloader? <Preloader /> : routes} */}
    </div>
  );
}

export default App;
