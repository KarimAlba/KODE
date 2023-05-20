import styles from './PreloaderComponent.module.scss';

const Preloader = () => {
    const screenHeight: number = window.screen.height;
    const countOfPersons: number = Math.floor(screenHeight/140);
    let personArr: number[] = [];

    for (let i = 0; i < countOfPersons; i ++) {
        let person = i;
        personArr.push(person);
    }

    const allPersons = personArr.map(person => {
        return <div className={styles.person} key={person}></div>
    })

    return (
        <div className={styles.preloader}>
            <div className={styles.loader}>
                {allPersons}
            </div>
        </div>
    )
}

export default Preloader;