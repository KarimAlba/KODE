import IWorker from '../../models/IWorker';
import CustomLink from '../customLink/CustomLinkComponent';

interface NavBarPropsTypes{
    workers: IWorker[];
    filterByDepartament: any;
}

const NavBar = (props: NavBarPropsTypes) => {
    const { workers } = props;
    return (
        <nav>
            <CustomLink 
                children='Все' workers={workers} to='/' 
                departament='all' 
                filterByDepartament={props.filterByDepartament}
            />
            <CustomLink 
                children='Designers' workers={workers} to='/'  
                departament='design' 
                filterByDepartament={props.filterByDepartament}
            />
            <CustomLink 
                children='Analysts' workers={workers} to='/'  
                departament='analytics' 
                filterByDepartament={props.filterByDepartament}
            />
            <CustomLink 
                children='Managers' workers={workers} to='/'  
                departament='management' 
                filterByDepartament={props.filterByDepartament}
            />
            <CustomLink 
                children='IOS' workers={workers} to='/'  
                departament='ios' 
                filterByDepartament={props.filterByDepartament}
            />
            <CustomLink 
                children='Android' workers={workers} to='/'  
                departament='android' 
                filterByDepartament={props.filterByDepartament}
            />
        </nav>
    )
}

export default NavBar