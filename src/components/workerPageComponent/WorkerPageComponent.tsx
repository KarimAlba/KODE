import styles from './WorkerPageComponent.module.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import IWorker from '../../models/IWorker'
import { Link } from 'react-router-dom';

const WorkerPage = (props: any) => {
    const { id } = useParams();
    const [worker, setWorker] = useState<IWorker | null>(null);

    useEffect(() => {
        let apiUrl = `https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${id}`;
        axios.get(apiUrl).then((resp) => {
            let employee = resp.data.items[0];
            console.log(employee)
            setWorker(employee);
        });
    }, []);

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