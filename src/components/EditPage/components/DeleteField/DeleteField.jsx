import React, {useEffect, useRef, useState} from "react"
import styles from "./DeleteField.module.css"
import {useNavigate} from "react-router-dom"
import {useJwtCheck} from "../../../../shared/api/hooks"
import {useDeleteAccountMutation} from "./api"
import {Box, Button, Divider, Grid, Typography} from "@mui/material"
import {AlertError} from "../../../../shared/components"
import {useTheme} from "@emotion/react"

const DeleteField = ({isDeleted, setIsDeleted, setVisibilityConfirmationPopup, role}) => {
    const navigate = useNavigate()
    const {data} = useJwtCheck()
    const [deleteAccount] = useDeleteAccountMutation()

    const [isLoading, setIsLoading] = useState(false)
    const [isFilling, setIsFilling] = useState(false)
    const [isError, setIsError] = useState(false)
    const timerIdRef = useRef(null)
    const {palette} = useTheme()

    const deleteTalent = async () => {
        setIsLoading(true)
        try {
            await deleteAccount({id: data.id, role})
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
                <Button
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onTouchStart={handleMouseDown}
                    onTouchEnd={handleMouseUp}
                    className={styles.waveBtn}
                    disableFocusRipple={true}>
                    <Typography
                        sx={{
                            color:
                                palette.mode === "dark"
                                    ? palette.neutral.secondary
                                    : "#000000",
                        }}
                        className={styles.waveBtnText}>
                        {isLoading ? "Loading..." : "Hold to delete"}
                    </Typography>
                    <Box
                        className={`${styles.waveBtnWaves} ${isFilling && styles.active}`}
                        sx={{
                            "&::before": {
                                backgroundColor:
                                    palette.mode === "dark"
                                        ? palette.neutral.main
                                        : "#ffffff",
                                borderRadius: "47%",
                            },
                            "&::after": {
                                backgroundColor:
                                    palette.mode === "dark" ? "#6565655d" : "#ffffff5d",
                                borderRadius: "43%",
                            },
                        }}></Box>
                </Button>
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
