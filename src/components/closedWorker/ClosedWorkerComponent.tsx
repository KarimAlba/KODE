import styles from './ClosedWorkerComponent.module.scss';
import IWorker from '../../models/IWorker';
import Durov from '../../assets/durovpashka.jpg';
import Bezos from '../../assets/bezos.jpg';
import { Link } from 'react-router-dom';

interface ClosedWorkerPropsTypes{
    worker: IWorker;
}

const ClosedWorker = (props: ClosedWorkerPropsTypes) => {
    const { worker } = props;

    return (
            <div className={styles['worker']}>
                <img 
                    src={Math.random() > 0.5? Bezos : Durov} 
                    alt="face of worker" 
                />
                <div className={styles['worker_container']}>
                    <div className={styles['worker_header']}>
                        <Link to={`/${worker.id}`}>
                            {worker.firstName + ' ' + worker.lastName}
                        </Link>
                        <p className={styles['worker_tag']}>
                            {worker.userTag}
                        </p>
                    </div>
                    <p>{worker.position}</p>
                </div>
            </div>
    )  
}

export default ClosedWorker;