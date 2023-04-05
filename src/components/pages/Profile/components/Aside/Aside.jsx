import React from "react"
import styles from "./Aside.module.css"
import {Content} from "./components/Content"
import {Place} from "@mui/icons-material"
import {Biography} from "./components/Biography"

const Aside = ({talent}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <div className={styles.generalInfo}>
                    <div className={styles.name}>
                        {`${talent.name} ${talent.surname}`}
                    </div>
                    <div className={styles.location}>
                        <span>{talent.location}</span> <Place color="primary" />
                    </div>
                </div>
                <div className={styles.experience}>
                    <span>{talent.experience}</span>
                </div>
                <div className={styles.biography}>
                    <Biography biography={talent.about} />
                </div>
            </div>
            <Content />
        </div>
    )
}

export {Aside}
