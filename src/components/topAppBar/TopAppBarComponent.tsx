import styles from './TopAppBar.module.scss';

const TopAppBar = (props: any) => {
    return (
        <div className="top-app-bar">
            <h1>Поиск</h1>
            <div className="input-block">                
                <input 
                    type="text" 
                    placeholder="Введи имя, тег, почту..."
                    className="search-inp"
                />
                <button className="filtration-btn"></button>
            </div>
        </div>
    )
}

export default TopAppBar;