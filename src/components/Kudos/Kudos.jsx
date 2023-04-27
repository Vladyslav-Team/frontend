import React, {useEffect, useState} from "react"
import styles from "./Kudos.module.css"
import {useJwtCheck} from "../../shared/api/hooks"
import {useAddKudosMutation, useGetKudosQuery} from "./api"
import Loader from "../../shared/components/Loader"
import Like from "./img/like.png"
import Unlike from "./img/unlike.png"

const Kudos = ({talentId, proofId}) => {
    const [isClicked, setIsClicked] = useState(false)
    const {data} = useJwtCheck()
    const isHome = talentId == data.id

    const [updateKudos] = useAddKudosMutation()
    const KudosInfo = useGetKudosQuery(
        {proofId},
        {
            refetchOnMountOrArgChange: true,
        }
    )

    const addingKudos = () => {
        const newAmountOfKudos = {
            data: {
                amount_of_kudos: KudosInfo.data.amount_of_kudos + 1,
            },
        }
        updateKudos({newAmountOfKudos, proofId})

        KudosInfo.refetch()
    }

    const handleClick = () => {
        if (!isClicked) {
            setIsClicked(true)
            addingKudos()
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
                        {isClicked ? (
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
