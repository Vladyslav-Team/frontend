import React from "react"
import styles from "./Profile.module.css"
import {ProfileSidebar} from "./components/ProfileSidebar"
import {Aside} from "./components/Aside"
import {useLocation} from "react-router-dom"
import {useGetAllUserInfoByIDQuery} from "./api"
import Loader from "../../../shared/components/Loader"
import {Box} from "@mui/material"
import bgImage from "../../../source/img/profileBaner.jpg"
import {useTheme} from "@emotion/react"
import {useJwtCheck} from "../../../shared/api/hooks"

const Profile = () => {
    const location = useLocation()
    const id = location.pathname.replace("/profile/", "")
    const jwt = useJwtCheck()
    const {palette} = useTheme()

    const role =
        jwt.data.scope === "ROLE_TALENT" ||
        (jwt.data.scope === "ROLE_SPONSOR" && jwt.data.id !== +id)
            ? "talents"
            : "sponsors"

    const {data, error, isLoading, isError, isSuccess, refetch} =
        useGetAllUserInfoByIDQuery(
            {id, role},
            {
                refetchOnMountOrArgChange: true,
            }
        )

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
                                <ProfileSidebar
                                    user={data}
                                    idTalentURL={id}
                                    refetch={refetch}
                                />
                                <Aside user={data} refetch={refetch} />
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
