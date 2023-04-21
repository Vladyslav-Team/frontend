import React, { useState } from 'react'
import styles from "./Kudos.module.css"
import { useJwtCheck } from '../../shared/api/hooks'

const Kudos = ({ talentId }) => {
    const [kudos, setKudos] = useState(0)
    const [isClicked, setIsClicked] = useState(false)
    const { data } = useJwtCheck()
    const isHome = talentId == data.id

    const handleClick = () => {
        if (!isClicked) {
            setKudos(kudos + 1)
            setIsClicked(true)
        }
    };

    const imgStyle = {
        pointerEvents: isHome ? "none" : "auto",
        cursor: isHome ? "none" : "pointer"
    };

    return (
        <>
            <div className={styles.flex_container}>
                <div className={styles.kudos_img}>
                    {isClicked ? (
                        <img className={styles.kudos_img} src={require("./img/like.png")} onClick={handleClick} style={imgStyle}
                        />) : (
                        <img className={styles.kudos_img} src={require("./img/unlike.png")} onClick={handleClick} style={imgStyle}
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

export { Kudos }