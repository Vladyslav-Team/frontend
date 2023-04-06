import React, {useState} from "react"
import styles from "./DeleteButton.module.css"

const DeleteButton = () => {
    const [isFilling, setIsFilling] = useState(false)
    const [timerId, setTimerId] = useState(null)

    const handleMouseDown = () => {
        setIsFilling(true)
        setTimerId(
            setTimeout(() => {
                console.log("Deleted")
            }, 5000)
        )
    }

    const handleMouseUp = () => {
        setIsFilling(false)
        setTimerId(null)
        clearTimeout(timerId)
    }

    return (
        <button
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            className={styles.waveBtn}>
            <span className={styles.waveBtnText}>Hold to delete</span>
            <span
                className={`${styles.waveBtnWaves} ${isFilling && styles.active}`}></span>
        </button>
    )
}

export {DeleteButton}
