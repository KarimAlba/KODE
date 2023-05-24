import IWorker from '../../models/IWorker';
import CustomLink from '../customLink/CustomLinkComponent';
import { useState } from 'react';

interface NavBarPropsTypes{
    workers: IWorker[];
    filterByDepartament: any;
    getDepart: Function;
}

const NavBar = (props: NavBarPropsTypes) => {
    const { workers, getDepart } = props;
    const [isActive, setIsActive] = useState<string>('all');
    const changeActive = (departament: string) => {setIsActive(departament)};

    return (
        <nav>
            <CustomLink 
                children='Все' workers={workers} to='/' 
                departament='all' 
                filterByDepartament={props.filterByDepartament}
                isActive={isActive}
                changeActive={changeActive}
                getDepart={getDepart}
            />
            <CustomLink 
                children='Designers' workers={workers} to='/'  
                departament='design' 
                filterByDepartament={props.filterByDepartament}
                isActive={isActive}
                changeActive={changeActive}
                getDepart={getDepart}
            />
            <CustomLink 
                children='Analysts' workers={workers} to='/'  
                departament='analytics' 
                filterByDepartament={props.filterByDepartament}
                isActive={isActive}
                changeActive={changeActive}
                getDepart={getDepart}
            />
            <CustomLink 
                children='Managers' workers={workers} to='/'  
                departament='management' 
                filterByDepartament={props.filterByDepartament}
                isActive={isActive}
                changeActive={changeActive}
                getDepart={getDepart}
            />
            <CustomLink 
                children='IOS' workers={workers} to='/'  
                departament='ios' 
                filterByDepartament={props.filterByDepartament}
                isActive={isActive}
                changeActive={changeActive}
                getDepart={getDepart}
            />
            <CustomLink 
                children='Android' workers={workers} to='/'  
                departament='android' 
                filterByDepartament={props.filterByDepartament}
                isActive={isActive}
                changeActive={changeActive}
                getDepart={getDepart}
            />
        </nav>
    )
}

export default NavBar