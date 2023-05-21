import React from "react"
import styles from "./ProfileSidebar.module.css"
import {Avatar} from "../../../../Avatar"
import {Button} from "@mui/material"
import {Info} from "./components/Info"
import {useTheme} from "@emotion/react"
import {NavLink} from "react-router-dom"
import {useJwtCheck} from "../../../../../shared/api/hooks/jwtCheck"

const ProfileSidebar = ({user, idTalentURL, refetch}) => {
    const {data} = useJwtCheck()
    const theme = useTheme()

    return (
        <div className={styles.sidebar}>
            <Avatar avatar={user.image} size={180} style={styles.avatar} />
            <Info user={user} refetch={refetch} />
            {user && (
                <>
                    <NavLink to={`/profile/${user.id}/edit`}>
                        {data.id === +idTalentURL && (
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
                        )}
                    </NavLink>

                    {data.scope === "ROLE_SPONSOR" && (
                        <NavLink to={`/profile/${user.id}/KudosFarming`}>
                            {data.id === +idTalentURL && (
                                <Button
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        width: theme.spacing(30),
                                        marginTop: theme.spacing(5),
                                        borderRadius: theme.shape.borderRadius,
                                    }}>
                                    Farm Kudos
                                </Button>
                            )}
                        </NavLink>
                    )}
                </>
            )}
        </div>
    )
}

export {ProfileSidebar}
