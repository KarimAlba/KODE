import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import TopAppBar from '../components/topAppBar/TopAppBarComponent';
import NavBar from '../components/navBarComponent/NavBarComponent';
import MainPage from '../components/mainPage/MainPageComponent';
import NotFoundPage from '../components/notFoundPage/NotFoundPage';
import Preloader from '../components/preloader/PreloaderComponent';
import { Routes, Route } from 'react-router-dom';
import Modal from '../components/modalWindow/ModalWindowComponent';
import IWorker from '../models/IWorker';

const App = () =>{
  const [stateOfPreloader, setStateOfPreloader] = useState<boolean>(true);

  const sortArray = (x: IWorker, y: IWorker) =>{
    if (x.firstName < y.firstName) {return -1;}
    if (x.firstName > y.firstName) {return 1;}
    return 0;
  }

  useEffect( () => {
    setTimeout( ()=> {
      setStateOfPreloader(!stateOfPreloader);
    }, 2000)
  }, []);

  const [workers, setWorkers] = useState<IWorker[] | []>([]);
  
  const sendReq = (param?: string) => {
    let apiUrl = `https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${param ? param : 'all'}`;
    axios.get(apiUrl).then((resp) => {
        let employee = resp.data.items;
        employee.sort(sortArray);
        setWorkers(employee);
    });
  }

  useEffect(() => {
    sendReq();
  }, 
  [])

  const [stateOfModal, setStateOfModal] = useState(false);
  const getStateOfModal = () => {setStateOfModal(!stateOfModal)}

  const [birthdaySorting, setBirthdaySorting] = useState<boolean>(false);
  const getStateOfSorting = () => {
    setBirthdaySorting(!birthdaySorting);
    birthdaySorting ? 
      setWorkers(workers.sort(sortArray)):
      setWorkers(workers.sort(
        (a: IWorker, b: IWorker) => Number(new Date(b.birthday)) - Number(new Date(a.birthday))
      ))
  }

  const routes =
    <Routes>
      <Route path='/' element={<MainPage workers={workers}/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>

  const filterByDepartament = (arr: IWorker[]) => {setWorkers(arr)};

  const checkArr = (person: IWorker, phrase: string) => {
      return person.firstName.includes(phrase)
      || person.lastName.includes(phrase)
      || person.phone.includes(phrase)
  }

  const [departForRender, setDepartForRender] = useState<string>('all');

  const getDepart = (departament: string) => {setDepartForRender(departament)}

  const prepareArray = (phrase: string) => {
    if (!phrase) {
      sendReq(departForRender);
    } setWorkers(workers.filter(worker => checkArr(worker, phrase)))
  }

  const getPhrase = (phrase: string) => {
    prepareArray(phrase);
  };

  return (
    <div className="App">
      <TopAppBar 
        getStateOfModal={getStateOfModal} 
        getPhrase={getPhrase} departament={departForRender}
      />
      <NavBar 
        workers={workers} filterByDepartament={filterByDepartament}
        getDepart={getDepart}
      />
      {
        stateOfModal? 
          <Modal 
            getStateOfModal={getStateOfModal} getStateOfSorting={getStateOfSorting} 
            birthdaySorting={birthdaySorting}
          />: 
          null
      }
      {stateOfPreloader? <Preloader /> : routes}
    </div>
  );
}

export default App;
