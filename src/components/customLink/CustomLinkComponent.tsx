import IWorker from '../../models/IWorker';
import { Link, useMatch } from 'react-router-dom';
import { useEffect } from 'react';  
import axios from 'axios';

interface CutomLinkPropsTypes{
    workers: IWorker[];
    to: string;
    children: string;
    filterByDepartament: any;
    departament: string;
}

const CustomLink = (props: CutomLinkPropsTypes) => {
    const { workers, children, to, departament } = props;
    const match = useMatch(to);

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
    }

    return(
        <Link 
            to={to}
            onClick={handleClick}
        >
            {children}
        </Link>
    )
}

export default CustomLink;