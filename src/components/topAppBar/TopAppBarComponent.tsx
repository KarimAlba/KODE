import styles from './TopAppBar.module.scss';
import React, { useState } from 'react';

const TopAppBar = (props: any) => {

    const handleBtnClick = () => {
        props.getStateOfModal()
    }

    return (
        <div className="top-app-bar">
            <h1>Поиск</h1>
            <div className="input-block">                
                <input 
                    type="text" 
                    placeholder="Введи имя, тег, почту..."
                    className="search-inp"
                />
                <button className="filtration-btn" onClick={handleBtnClick}></button>
            </div>
        </div>
    )
}

export default TopAppBar;