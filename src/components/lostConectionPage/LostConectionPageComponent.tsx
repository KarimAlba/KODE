import styles from './LostConectionPageComponent.module.scss';
import { useState } from 'react';

const LostConectionPage = () => {
    const [conection, setConection] = useState<boolean>(false);

    setInterval(() => {
        setConection(!conection);
    }, 5000);

    return (
        <div 
            className={styles['lost-page']} style={conection? 
            {backgroundColor: "#6534FF"}:{backgroundColor: "#F44336"}}
        >
            <h1>Поиск</h1>
            <p>
                {conection? 
                    'Секундочку, гружусь...': 
                    'Не могу обновить данные. Проверь соединение с интернетом.'
                }
            </p>
        </div>
    )
}

export default LostConectionPage;