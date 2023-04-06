import React from "react"
import styles from "./ProfileSidebar.module.css"
import {Avatar} from "../../../../Avatar"
import {Button} from "@mui/material"
import {Info} from "./components/Info"
import {useTheme} from "@emotion/react"
import {NavLink} from "react-router-dom"

const ProfileSidebar = ({talent}) => {
    const theme = useTheme()

    return (
        <div className={styles.sidebar}>
            <Avatar avatar={talent.image} size={180} style={styles.avatar} />
            <Info talent={talent} />
            <NavLink to={`/profile/${talent.id}/edit`}>
                <Button
                    variant="outlined"
                    size="large"
                    sx={{
                        width: theme.spacing(30),
                        marginTop: theme.spacing(5),
                        borderRadius: theme.shape.borderRadius,
                    }}>
                    Edit
                </Button>
            </NavLink>
        </div>
    )
}

export {ProfileSidebar}
