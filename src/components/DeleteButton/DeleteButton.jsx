import React, {useRef, useState} from "react"
import styles from "./DeleteButton.module.css"
import {useNavigate} from "react-router-dom"
import {useJwtCheck} from "../../shared/api/hooks"
import {useDeleteAccountMutation} from "./api"

const DeleteButton = () => {
    const navigate = useNavigate()
    const {data} = useJwtCheck()
    const [deleteAccount] = useDeleteAccountMutation()

    const [isLoading, setIsLoading] = useState(false)
    const [isFilling, setIsFilling] = useState(false)
    const timerIdRef = useRef(null)

    const deleteTalent = async () => {
        setIsLoading(true)
        await deleteAccount(data?.id)
        localStorage.removeItem("jwt-token")
        setIsLoading(false)
    }

    const handleMouseDown = () => {
        setIsFilling(true)
        timerIdRef.current = setTimeout(() => {
            if (window.confirm("Are you sure you want to delete your account?")) {
                deleteTalent()
                localStorage.removeItem("jwt-token")
                navigate("/")
            }
        }, 5000)
    }

    const handleMouseUp = () => {
        setIsFilling(false)
        clearTimeout(timerIdRef.current)
    }

    return (
        <button
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            className={styles.waveBtn}>
            <span className={styles.waveBtnText}>
                {isLoading ? "Loading..." : "Hold to delete"}
            </span>
            <span
                className={`${styles.waveBtnWaves} ${isFilling && styles.active}`}></span>
        </button>
    )
}

export {DeleteButton}
