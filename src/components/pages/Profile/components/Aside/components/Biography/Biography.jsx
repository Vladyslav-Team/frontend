import React, {useState, useEffect} from "react"
import styles from "./Biography.module.css"

const Biography = ({biography}) => {
    const [isTruncated, setIsTruncated] = useState(false)
    const [isToggled, setIsToggled] = useState(false)

    const handleClick = () => {
        setIsToggled(!isToggled)
    }

    useEffect(() => {
        if (biography.length >= 300) {
            setIsTruncated(true)
        }
    }, [biography])

    let truncatedText = isTruncated ? `${biography.slice(0, 180)}...` : biography

    return (
        <div className={styles.biography} onClick={handleClick}>
            {isToggled ? biography : truncatedText}
        </div>
    )
}

export {Biography}
