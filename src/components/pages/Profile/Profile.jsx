import React from "react"
import styles from "./Profile.module.css"
import {ProfileSidebar} from "./components/ProfileSidebar"
import {Aside} from "./components/Aside"
import {useLocation} from "react-router-dom"
import {useGetAllInfoByIDQuery} from "./api"
import Loader from "../../../shared/components/Loader"
import {Box} from "@mui/material"
import bgImage from "../../../source/img/profileBaner.jpg"
import {useTheme} from "@emotion/react"

const Profile = () => {
    const location = useLocation()
    const idTalent = location.pathname.replace("/profile/", "")
    const {data, error, isLoading, isError, isSuccess} = useGetAllInfoByIDQuery(
        idTalent,
        {
            refetchOnMountOrArgChange: true,
        }
    )
    const {palette} = useTheme()

    return (
        <>
            {isSuccess ? (
                <>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "55px",
                            left: 0,
                            width: "100%",
                            height: "150px",
                            background: `url(${bgImage}) no-repeat center`,
                            filter: palette.mode === "dark" ? "brightness(0.4)" : "none",
                            backgroundSize: "cover",
                        }}></Box>
                    <div className={styles.wrapper}>
                        {isSuccess && (
                            <>
                                <ProfileSidebar talent={data} idTalentURL={idTalent} />
                                <Aside talent={data} />
                            </>
                        )}
                    </div>
                </>
            ) : (
                <Loader isLoading={isLoading} isError={isError} error={error} />
            )}
        </>
    )
}

export {Profile}
