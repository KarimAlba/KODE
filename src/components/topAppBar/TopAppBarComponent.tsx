import { useState } from 'react'

interface TopAppBarProps{
    getStateOfModal: Function;
    getPhrase: Function;
    inputValue: string;
}

const TopAppBar = (props: TopAppBarProps) => {
    const [inpValue, setInputValue] = useState<string>(props.inputValue)
    const handleBtnClick = () => {
        props.getStateOfModal();
    }

    const handleSearch = (e: any) => {
        const phrase: string = e.target.value;
        setInputValue(phrase);
        props.getPhrase(phrase);
    }

    return (
        <div className="top-app-bar">
            <h1>Поиск</h1>
            <div className="input-block">                
                <input 
                    type="text"
                    placeholder="Введи имя, тег, почту..."
                    className="search-inp" value={inpValue}
                    onInput={handleSearch}
                />
                <button className="filtration-btn" onClick={handleBtnClick}></button>
            </div>
        </div>
    )
}

export default TopAppBar;