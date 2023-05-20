import React from "react"
import styles from "./Profile.module.css"
import {ProfileSidebar} from "./components/ProfileSidebar"
import {Aside} from "./components/Aside"
import {useLocation} from "react-router-dom"
import {useGetAllInfoByIDQuery} from "./api"
import Loader from "../../../shared/components/Loader"

const Profile = () => {
    const location = useLocation()
    const idTalent = location.pathname.replace("/profile/", "")
    const {data, refetch, error, isLoading, isError, isSuccess} = useGetAllInfoByIDQuery(idTalent)

    return (
        <>
            {isSuccess ? (
                <>
                    <div className={styles.plug}></div>
                    <div className={styles.wrapper}>
                        {isSuccess && (
                            <>
                                <ProfileSidebar talent={data} idTalentURL={idTalent} refetch={refetch} />
                                <Aside talent={data}/>
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
