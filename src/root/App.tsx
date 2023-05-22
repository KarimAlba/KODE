import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import TopAppBar from '../components/topAppBar/TopAppBarComponent';
import NavBar from '../components/navBarComponent/NavBarComponent';
import MainPage from '../components/mainPage/MainPageComponent';
import NotFoundPage from '../components/notFoundPage/NotFoundPage';
import Preloader from '../components/preloader/PreloaderComponent';
import { Routes, Route, NavLink } from 'react-router-dom';
import Modal from '../components/modalWindow/ModalWindowComponent';

const App = () =>{
  const [stateOfPreloader, setStateOfPreloader] = useState(true);

  useEffect( () => {
    setTimeout( ()=> {
      setStateOfPreloader(!stateOfPreloader);
    }, 2000)
  }, []);

  const [workers, setWorkers] = useState([]);
  
  const sendReq = () => {
    let apiUrl = 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all';
    axios.get(apiUrl).then((resp) => {
        let employee = resp.data.items;
        setWorkers(workers);
    });
  }

  useEffect(() => {
    sendReq();
  }, 
  [])

  const [stateOfModal, setStateOfModal] = useState(false);
  const getStateOfModal = () => {setStateOfModal(!stateOfModal)}

  const routes =
    <Routes>
      <Route path='/' element={<MainPage workers={workers}/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>

  return (
    <div className="App">
      <TopAppBar getStateOfModal={getStateOfModal}/>
      <NavBar/>
      {stateOfModal? <Modal getStateOfModal={getStateOfModal} />: null}
      {stateOfPreloader? <Preloader /> : routes}
    </div>
  );
}

export default App;
