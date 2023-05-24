import Worker from "../../models/IWorker"
import styles from './MainPageComponent.module.scss'
import Durov from '../../assets/durovpashka.jpg'
import Bezos from '../../assets/bezos.jpg'

interface MainPagePropsType {
    workers: Worker[] | [];
}

const MainPage = (props: MainPagePropsType) => {
    const { workers } = props;

    return (
        <div className={styles['workers']}>
           { workers.map(worker => 
                (
                    <div key={worker.id + worker.avatarUrl} className={styles['workers_worker']}>
                        <img 
                            key={worker.id + worker.department} 
                            src={Math.random() > 0.5? Bezos : Durov} 
                            alt="face of worker" 
                        />
                        <div key={worker.id + worker.lastName} className={styles['worker_container']}>
                            <div key={worker.id + worker.firstName} className={styles['worker_header']}>
                                <h4 key={worker.id + worker.birthday}>
                                    {worker.firstName + ' ' + worker.lastName}
                                </h4>
                                <p 
                                    className={styles['worker_tag']}
                                    key={worker.birthday}
                                >
                                    {worker.userTag}
                                </p>
                            </div>
                            <p  key={worker.id}>{worker.position}</p>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default MainPage