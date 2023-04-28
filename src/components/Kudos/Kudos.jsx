import React, {useEffect, useState} from "react"
import styles from "./Kudos.module.css"
import {useJwtCheck} from "../../shared/api/hooks"
import {useAddKudosMutation, useGetKudosQuery} from "./api"
import Loader from "../../shared/components/Loader"
import Like from "./img/like.png"
import Unlike from "./img/unlike.png"

const Kudos = ({talentId, proofId}) => {
    const {data} = useJwtCheck()
    const isHome = +talentId === data.id

    const [updateKudos, result] = useAddKudosMutation()
    const KudosInfo = useGetKudosQuery(
        {proofId},
        {
            refetchOnMountOrArgChange: true,
        }
    )

    useEffect(() => {
        KudosInfo.refetch()
    }, [result.status])

    const handleClick = () => {
        if (!KudosInfo.data.is_clicked) {
            updateKudos({proofId})
        }
    }

    const imgStyle = {
        pointerEvents: isHome ? "none" : "auto",
        cursor: isHome ? "none" : "pointer",
    }

    return (
        <>
            {!KudosInfo.isLoading ? (
                <div className={styles.flex_container}>
                    <div className={styles.kudos_img}>
                        {KudosInfo.data.is_clicked ? (
                            <img
                                className={styles.kudos_img}
                                src={Like}
                                onClick={handleClick}
                                style={imgStyle}
                            />
                        ) : (
                            <img
                                className={styles.kudos_img}
                                src={Unlike}
                                onClick={handleClick}
                                style={imgStyle}
                            />
                        )}
                    </div>
                    <div
                        className={
                            styles.kudos_counter
                        }>{`${KudosInfo.data.amount_of_kudos}`}</div>
                </div>
            ) : (
                <Loader
                    isLoading={KudosInfo.isLoading}
                    isError={KudosInfo.isError}
                    error={KudosInfo.error}
                />
            )}
        </>
    )
}

export {Kudos}