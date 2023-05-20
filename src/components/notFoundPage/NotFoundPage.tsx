import styles from './NotFound.module.scss';
import { Routes, Route, NavLink } from 'react-router-dom';

const NotFoundPage = (props: any) => {
    return (
        <div className={styles.page}>
            <div></div>
            <h3>Какой-то сверхразум все сломал</h3>
            <p>Постараемся быстро починить</p>
            <a href="">Попробуем снова</a>
        </div>
    )
}

export default NotFoundPage