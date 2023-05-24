import IWorker from '../../models/IWorker';
import CustomLink from '../customLink/CustomLinkComponent';
import { useState } from 'react';

interface NavBarPropsTypes{
    workers: IWorker[];
    filterByDepartament: any;
}

const NavBar = (props: NavBarPropsTypes) => {
    const { workers } = props;
    const [isActive, setIsActive] = useState<boolean>(true);
    const changeActive = () => {setIsActive(false)};

    return (
        <nav>
            <CustomLink 
                children='Все' workers={workers} to='/' 
                departament='all' 
                filterByDepartament={props.filterByDepartament}
                isActive={isActive}
                changeActive={changeActive}
            />
            <CustomLink 
                children='Designers' workers={workers} to='/'  
                departament='design' 
                filterByDepartament={props.filterByDepartament}
                changeActive={changeActive}
            />
            <CustomLink 
                children='Analysts' workers={workers} to='/'  
                departament='analytics' 
                filterByDepartament={props.filterByDepartament}
                changeActive={changeActive}
            />
            <CustomLink 
                children='Managers' workers={workers} to='/'  
                departament='management' 
                filterByDepartament={props.filterByDepartament}
                changeActive={changeActive}
            />
            <CustomLink 
                children='IOS' workers={workers} to='/'  
                departament='ios' 
                filterByDepartament={props.filterByDepartament}
                changeActive={changeActive}
            />
            <CustomLink 
                children='Android' workers={workers} to='/'  
                departament='android' 
                filterByDepartament={props.filterByDepartament}
                changeActive={changeActive}
            />
        </nav>
    )
}

export default NavBar