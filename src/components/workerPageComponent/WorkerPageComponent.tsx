import styles from './WorkerPageComponent.module.scss';
import { useState, useContext, useEffect } from 'react';
import IWorker from '../../models/IWorker'
import { Link, useParams } from 'react-router-dom';
import WorkersContext from '../../context/WorkersContext';

const WorkerPage = (props: any) => {
    const { id } = useParams();
    const [worker, setWorker] = useState<IWorker | null>(null);
    const employee = useContext(WorkersContext);
    
    const getWorker = () => {
        let activeWorker = employee.filter(item => item.id === id);
        setWorker(activeWorker[0]);
    }

    useEffect( () => {
        getWorker();
    }, [])
    
    return (
            <div className={styles['opened-worker']}>
                <Link to='/'>Назад</Link>
                <h1>Details about worker</h1>
                {worker && (
                    <div>
                        <ul>
                            <li>{worker.firstName}</li>
                            <li>{worker.lastName}</li>
                            <li>{worker.department}</li>
                            <li>
                                <a href={'tel' + worker.phone}>{worker.phone}</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
    )
} 

export default WorkerPage;