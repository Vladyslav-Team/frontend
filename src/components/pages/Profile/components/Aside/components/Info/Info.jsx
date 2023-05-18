import React from "react"
import {Biography} from "../Biography"
import styles from "./info.module.css"
import {Place} from "@mui/icons-material"
import {Box} from "@mui/material"
import {useTheme} from "@emotion/react"

const Info = ({talent}) => {
    const {palette} = useTheme()

    return (
        <Box
            sx={{
                color:
                    palette.mode === "dark"
                        ? palette.neutral.secondary
                        : palette.primary.main,
            }}
            className={styles.info}>
            <div className={styles.generalInfo}>
                <div className={styles.name}>{`${talent.name} ${talent.surname}`}</div>
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
        </Box>
    )
}

export {Info}
