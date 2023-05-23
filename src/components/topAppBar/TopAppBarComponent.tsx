interface TopAppBarProps{
    getStateOfModal: any;
    getPhrase: any;
}

const TopAppBar = (props: TopAppBarProps) => {
    const handleBtnClick = () => {
        props.getStateOfModal();
    }

    const handleSearch = (e: any) => {
        const phrase: string = e.target.value;
        props.getPhrase(phrase);
    }

    return (
        <div className="top-app-bar">
            <h1>Поиск</h1>
            <div className="input-block">                
                <input 
                    type="text" 
                    placeholder="Введи имя, тег, почту..."
                    className="search-inp"
                    onInput={handleSearch}
                />
                <button className="filtration-btn" onClick={handleBtnClick}></button>
            </div>
        </div>
    )
}

export default TopAppBar;