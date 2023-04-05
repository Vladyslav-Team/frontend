import React, {useEffect, useState} from "react"
import styles from "./Profile.module.css"
import {ProfileSidebar} from "./components/ProfileSidebar"
import {Aside} from "./components/Aside"
import {useJwtCheck} from "../../../shared/api/hooks"
import {useNavigate} from "react-router-dom"
import {useGetAllInfoByIDQuery} from "./api"

const Profile = () => {
    console.log(localStorage.getItem("jwt-token"))
    const {data, error, isLoading} = useGetAllInfoByIDQuery(
        1,
        localStorage.getItem("jwt-token")
    )
    const navigate = useNavigate()
    const [talent, setTalent] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        !data && navigate("/talents/signin")
    }, [data, navigate])
    console.log(error, isLoading)
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
                <h1>Loading...</h1>
            )}
        </>
    )
}

export {Profile}
