import React, {useState, useEffect} from "react"
import Grid from "@mui/material/Grid"
import {Box, Button, Typography, Dialog, DialogTitle} from "@mui/material"
import LinearProgress from "@mui/material/LinearProgress"
import {ReactComponent as CudosSVG} from "../../source/img/cudosIMG.svg"
import style from "./Clicker.module.css"

const Clicker = () => {
    const [count, setCount] = useState(0)
    const [time, setTime] = useState(100)
    const [isRunning, setIsRunning] = useState(false)
    const [open, setOpen] = React.useState(false)

    const handleClose = async () => {
        await setOpen(false)
        setIsRunning(false)
        setCount(0)
        setTime(100)
    }

    const createParticle = (x, y) => {
        const particle = document.createElement("particle")

        document.body.appendChild(particle)

        const size = Math.floor(Math.random() * 20 + 5) + 20
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`
        particle.style.borderRadius = `${100}%`

        particle.style.background = "#fff"
        particle.style.border = `${2}px solid #9ccef1`
        particle.style.position = "absolute"
        particle.style.zIndex = "0"
        particle.style.top = "200px"
        particle.style.left = "50%"

        const destinationX = x + (Math.random() - 6) * 2 * 65
        const destinationY = y

        const animation = particle.animate(
            [
                {
                    transform: "translate(-50%, -50%) rotate(360deg)",
                    opacity: 1,
                },
                {
                    transform: `translate(${destinationX}px, ${destinationY}px) rotate(90deg)`,
                    opacity: 0,
                },
            ],
            {
                duration: Math.random() * 1000 + 500,
                easing: "cubic-bezier(0, .9, .57, 1)",
                delay: Math.random() * 200,
            }
        )

        animation.onfinish = () => {
            particle.remove()
        }
    }

    useEffect(() => {
        let intervalId
        if (isRunning) {
            intervalId = setInterval(() => setTime(time - 1), 10)
        }
        if (time === 0) {
            setOpen(true)
            clearInterval(intervalId)
        }
        return () => clearInterval(intervalId)
    }, [isRunning, time])

    const handleClick = (e) => {
        setIsRunning(true)
        if (e.clientX === 0 && e.clientY === 0) {
            const x = 600 / 2
            const y = 600 / 2
            for (let i = 0; i < 20; i++) {
                createParticle(x, y)
            }
        } else {
            for (let i = 0; i < 20; i++) {
                setCount((prev) => prev + 1)
                createParticle(700, 400)
            }
        }
    }

    return (
        <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            height={"100%"}
            paddingTop={"120px"}
            paddingBottom={"120px"}>
            <Grid
                item
                sx={{boxShadow: "-1px 68px 41px -11px rgba(0,0,0,0.44)"}}
                width={"480px"}
                paddingLeft={"30px"}
                paddingRight={"30px"}
                paddingBottom={"30px"}
                display={"flex"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                flexDirection={"column"}
                paddingTop={"80px"}>
                <button
                    id="button"
                    onClick={handleClick}
                    className={style.buttonClicker}
                    style={{
                        width: "max-content",
                        height: "max-content",
                        border: "none",
                        outline: "none",
                        background: "#ffff",
                        boxShadow: "10px 10px 77px -7px rgba(0,0,0,0.35)",
                        borderRadius: "20px",
                        position: "relative",
                        zIndex: "20",
                        marginBottom: "70px",
                    }}>
                    <Box
                        width={"180px"}
                        height={"172px"}
                        display={"flex"}
                        border={"none"}
                        justifyContent={"center"}
                        alignItems={"center"}>
                        <CudosSVG width={"90px"} />
                    </Box>
                    <LinearProgress
                        variant="determinate"
                        value={time}
                        sx={{width: "150px", marginLeft: "12px"}}
                    />
                </button>
                <Typography
                    textAlign={"center"}
                    variant="h4"
                    fontWeight={"800"}
                    paddingBottom={"5px"}>
                    {"Let's start farming Kudos"}
                </Typography>
                <Typography
                    textAlign={"center"}
                    variant="h5"
                    fontWeight={"800"}
                    paddingBottom={"5px"}>
                    {"Rules"}
                </Typography>
                <Typography variant="body1">
                    1. Press the Kudos button as fast as possible for a set amount of time
                    (e.g., 1 minute). <br />
                    2. For each press of the Kudos button, you will receive points.
                    <br />
                    3. At the end of the time period (e.g. after 1 minute), the sum of all
                    points you have earned will be tallied and entered into the results
                    table.
                    <br />
                    4. If you press the Kudos button too often or too slowly, it may
                    result in the temporary blocking of your account or the cancellation
                    of your points.
                    <br />
                    5. You can participate in Kudos farming multiple times per day, but
                    each time a new time period will be set for farming.
                    <br />
                </Typography>
            </Grid>
            <Dialog
                open={open}
                maxWidth="500px"
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "100%",
                            maxWidth: "500px",
                        },
                    },
                }}>
                <DialogTitle>Your result</DialogTitle>
                <Typography
                    textAlign={"center"}
                    variant="h5"
                    paddingBottom={"20px"}
                    fontWeight={"600"}>
                    Points
                </Typography>
                <Typography textAlign={"center"} variant="h5" paddingBottom={"20px"}>
                    {count}
                </Typography>
                <Grid
                    display={"flex"}
                    justifyContent={"flex-end"}
                    paddingRight={"20px"}
                    paddingBottom={"5px"}>
                    <Button
                        onClick={handleClose}
                        variant="outlined"
                        size="small"
                        sx={{marginRight: "10px"}}>
                        Try again
                    </Button>
                    <Button variant="outlined" size="small">
                        SUBMIT
                    </Button>
                </Grid>
            </Dialog>
        </Grid>
    )
}

export {Clicker}
