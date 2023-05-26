import React from "react"
import {Biography} from "../Biography"
import styles from "./info.module.css"
import {Place} from "@mui/icons-material"
import {useJwtCheck} from "../../../../../../../shared/api/hooks"
import {Box} from "@mui/material"
import {useParams} from "react-router-dom"
import {useTheme} from "@emotion/react"

const Info = ({user}) => {
    const {talentId} = useParams()
    const {data} = useJwtCheck()
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
                <div className={styles.name}>{`${user.name} ${user.surname}`}</div>
                <div className={styles.location}>
                    <span>{user.location}</span> <Place color="primary" />
                </div>
            </div>
            <div className={styles.experience}>
                <span>{user.experience}</span>
            </div>
            <div className={styles.biography}>
                {data.scope === "ROLE_SPONSOR" && +talentId === data.id ? (
                    <Box sx={{fontSize: "24px"}}>Balance: {user.balance}</Box>
                ) : (
                    <Biography biography={user.about} />
                )}
                {data.scope === "ROLE_TALENT" && +talentId === data.id ? (
                    <Box sx={{fontSize: "24px"}}>Amount of Kudoses: {user.balance}</Box>
                ) : (
                    <Biography biography={user.about} />
                )}
            </div>
        </Box>
    )
}

export {Info}
