import Worker from "../../models/IWorker";
import styles from './MainPageComponent.module.scss';
import ClosedWorker from "../closedWorker/ClosedWorkerComponent";

interface MainPagePropsType {
    workers: Worker[] | [];
}

const MainPage = (props: MainPagePropsType) => {
    const { workers } = props;

    return (
        <div className={styles['workers']}>
           { workers.map(worker => 
                (
                    <ClosedWorker key={worker.id + worker.avatarUrl} worker={worker}/>
                )
            )}
        </div>
    )
}

export default MainPage