import React, {useEffect, useRef, useState} from "react"
import styles from "./DeleteField.module.css"
import {useNavigate} from "react-router-dom"
import {useJwtCheck} from "../../../../shared/api/hooks"
import {useDeleteAccountMutation} from "./api"
import {Divider, Grid, Typography} from "@mui/material"
import {AlertError} from "../../../../shared/components"

const DeleteField = ({isDeleted, setIsDeleted, setVisibilityConfirmationPopup}) => {
    const navigate = useNavigate()
    const {data} = useJwtCheck()
    const [deleteAccount] = useDeleteAccountMutation()

    const [isLoading, setIsLoading] = useState(false)
    const [isFilling, setIsFilling] = useState(false)
    const [isError, setIsError] = useState(false)
    const timerIdRef = useRef(null)

    const deleteTalent = async () => {
        setIsLoading(true)
        try {
            await deleteAccount(data?.id)
            localStorage.removeItem("jwt-token")
            setIsLoading(false)
            navigate("/")
        } catch (error) {
            setIsLoading(false)
            setIsFilling(false)
            setIsError(true)
        }
    }

    useEffect(() => {
        if (isDeleted) {
            deleteTalent()
            setIsDeleted(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDeleted])

    const handleMouseDown = async () => {
        setIsFilling(true)
        timerIdRef.current = setTimeout(() => {
            setVisibilityConfirmationPopup(true)
            setIsFilling(false)
        }, 2000)
    }

    const handleMouseUp = () => {
        setIsFilling(false)
        clearTimeout(timerIdRef.current)
    }

    return (
        <>
            <Grid
                container
                columns={1}
                display={"flex"}
                flexDirection={"row"}
                flexWrap={"nowrap"}
                alignItems={"flex-end"}
                paddingBottom={2}>
                <Grid item>
                    <Typography
                        sx={{fontSize: 20, whiteSpace: "nowrap", color: "#d32f2f"}}>
                        Danger zone
                    </Typography>
                </Grid>
            </Grid>
            <Divider sx={{width: "96%", backgroundColor: "#d32f2f"}} />
            <Grid
                container
                columns={1}
                display={"flex"}
                justifyContent={"center"}
                margin={"20px 0px"}
                width={"100%"}>
                <button
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onTouchStart={handleMouseDown}
                    onTouchEnd={handleMouseUp}
                    className={styles.waveBtn}>
                    <span className={styles.waveBtnText}>
                        {isLoading ? "Loading..." : "Hold to delete"}
                    </span>
                    <span
                        className={`${styles.waveBtnWaves} ${
                            isFilling && styles.active
                        }`}></span>
                </button>
            </Grid>
            {isError && (
                <AlertError
                    defaultStatus={true}
                    massageError={"Failed to delete account. Please try again later."}
                />
            )}
        </>
    )
}

export {DeleteField}
