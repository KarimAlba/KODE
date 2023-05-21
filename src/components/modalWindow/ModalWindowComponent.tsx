import styles from './ModalWindowComponent.module.scss';

const Modal = (props: any) => {
    const handleBtnClick = () => {
        props.getStateOfModal()
    }

    return(
        <div className={styles.background}>
            <div className={styles.modal}>
                <div className={styles['modal_header']}>
                    <h3>Сортировка</h3>
                    <button onClick={handleBtnClick}>x</button>
                </div>
                <div className={styles.checkbox}>
                    <input type="checkbox" value='По алфавиту' name='alphabet'/>
                    <label htmlFor="alphabet">По алфавиту</label>
                </div>
                <div className={styles.checkbox}>
                    <input type="checkbox" value='По дню рождения' name='birthday' />
                    <label htmlFor="birthday">По дню рождения</label>
                </div>
            </div>
        </div>
    )
}

export default Modal;