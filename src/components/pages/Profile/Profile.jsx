import React from "react"
import styles from "./Profile.module.css"
import {ProfileSidebar} from "./components/ProfileSidebar"
import {Aside} from "./components/Aside"
import {useLocation} from "react-router-dom"
import {useGetAllUserInfoByIDQuery} from "./api"
import Loader from "../../../shared/components/Loader"
import {useJwtCheck} from "../../../shared/api/hooks"

const Profile = () => {
    const location = useLocation()
    const id = location.pathname.replace("/profile/", "")
    const jwt = useJwtCheck()

    const role =
        jwt.data.scope === "ROLE_TALENT" ||
        (jwt.data.scope === "ROLE_SPONSOR" && jwt.data.id !== +id)
            ? "talents"
            : "sponsors"

    const {data, error, isLoading, isError, isSuccess} = useGetAllUserInfoByIDQuery(
        {id, role},
        {
            refetchOnMountOrArgChange: true,
        }
    )

    return (
        <>
            {isSuccess ? (
                <>
                    <div className={styles.plug}></div>
                    <div className={styles.wrapper}>
                        {isSuccess && (
                            <>
                                <ProfileSidebar talent={data} idTalentURL={id} />
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
