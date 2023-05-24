import styles from './NotFound.module.scss';
import { NavLink } from 'react-router-dom';

interface NotFoundPagePropsTypes{}

const NotFoundPage = (props: NotFoundPagePropsTypes) => {
    return (
        <div className={styles.page}>
            <div></div>
            <h3>Какой-то сверхразум все сломал</h3>
            <p>Постараемся быстро починить</p>
            <NavLink to='/'>Попробуем снова</NavLink>
        </div>
    )
}

export default NotFoundPage