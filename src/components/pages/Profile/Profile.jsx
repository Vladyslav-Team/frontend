import React from "react"
import Alert from "@mui/material/Alert"
import styles from "./Profile.module.css"
import {ProfileSidebar} from "./components/ProfileSidebar"
import {Aside} from "./components/Aside"
import {useLocation} from "react-router-dom"
import {useGetAllInfoByIDQuery} from "./api"
import CircularProgress from "@mui/material/CircularProgress"
import {Grid} from "@mui/material"

const Profile = () => {
    const location = useLocation()
    const idTalent = location.pathname.replace("/profile/", "")
    const {data, error, isLoading, isError} = useGetAllInfoByIDQuery(idTalent)

    return (
        <>
            {data ? (
                <>
                    <div className={styles.plug}></div>
                    <div className={styles.wrapper}>
                        <ProfileSidebar talent={data} />
                        <Aside talent={data} />
                    </div>
                </>
            ) : (
                <Grid
                    container
                    width={"100%"}
                    height={"100vh"}
                    justifyContent={"center"}
                    alignItems={"center"}>
                    {isLoading && <CircularProgress />}
                    {isError && <Alert severity="error">{error.message}</Alert>}
                </Grid>
            )}
        </>
    )
}

export {Profile}
