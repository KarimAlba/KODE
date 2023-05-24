import IWorker from '../../models/IWorker';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface CutomLinkPropsTypes{
    workers: IWorker[];
    to: string;
    children: string;
    filterByDepartament: any;
    departament: string;
    getDepart:Function;
    isActive: string;
    changeActive: Function;
}

const CustomLink = (props: CutomLinkPropsTypes) => {
    const { children, to, departament, isActive, changeActive, getDepart } = props;

    const sortArray = (x: IWorker, y: IWorker) =>{
        if (x.firstName < y.firstName) {return -1;}
        if (x.firstName > y.firstName) {return 1;}
        return 0;
    }

    const sendReq = () => {
        let apiUrl = `https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${departament}`;
        axios.get(apiUrl).then((resp) => {
            let employee = resp.data.items;
            employee.sort(sortArray);
            props.filterByDepartament(employee);
        });
    }

    const handleClick = () => {
        sendReq();
        getDepart(departament);
        changeActive(departament);
    }

    return(
        <Link 
            to={to} onClick={handleClick}
            className={isActive == departament? 'active': 'inactive' }
        >
            {children}
        </Link>
    )
}

export default CustomLink;