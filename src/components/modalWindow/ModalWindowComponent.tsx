import styles from './ModalWindowComponent.module.scss';

interface ModalPropsTypes {
    birthdaySorting: boolean;
    getStateOfModal: any;
    getStateOfSorting: any;
}

const Modal = (props: ModalPropsTypes) => {
    const { birthdaySorting } = props;

    const handleBtnClick = () => {
        props.getStateOfModal()
    }

    const handleInputClick = () => {
        props.getStateOfSorting();
    }

    return(
        <div className={styles.background}>
            <div className={styles.modal}>
                <div className={styles['modal_header']}>
                    <h3>Сортировка</h3>
                    <button onClick={handleBtnClick}>x</button>
                </div>

                <div className={styles["form_radio"]}>
                    <div>
                        {birthdaySorting?                     
                            <input 
                                type="radio" id="alphabet"
                                name="sorting" onClick={handleInputClick} 
                            />: 
                            <input 
                                type="radio" id="alphabet"
                                name="sorting" onClick={handleInputClick}
                                defaultChecked 
                            />
                        }
                        <label htmlFor="alphabet">По алфавиту</label>
                    </div>
                    <div>
                        {birthdaySorting?                     
                            <input 
                                type="radio" id="birthday"
                                name="sorting" onClick={handleInputClick}
                                defaultChecked 
                            />: 
                            <input 
                                type="radio" id="birthday"
                                name="sorting" onClick={handleInputClick}
                            />
                        }

                        <label htmlFor="birthday">По дню рождения</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;

