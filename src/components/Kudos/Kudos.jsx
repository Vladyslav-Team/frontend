import React, { useState } from 'react';
import styles from "./Kudos.module.css"

const Kudos = () => {
    const [kudos, setKudos] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (isClicked) {
            setKudos(kudos - 1);
        } else {
            setKudos(kudos + 1);
        }
        setIsClicked(!isClicked);
    };

    return (
        <>
            <div className={styles.flex_container}>
                <div className={styles.kudos_img}>
                    {isClicked ? (
                        <img className={styles.kudos_img} src={require("./img/like.png")} onClick={handleClick}
                        />) : (
                        <img className={styles.kudos_img} src={require("./img/unlike.png")} onClick={handleClick}
                        />)
                    }
                </div>
                <div className={styles.kudos_counter}>
                    {`${kudos}`}
                </div>
            </div>
        </>
    );
};

export { Kudos };