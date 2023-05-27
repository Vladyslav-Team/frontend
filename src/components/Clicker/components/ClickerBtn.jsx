import React from "react"
import {handleClick} from "./snippets"
import {Box, LinearProgress} from "@mui/material"
import {ReactComponent as CudosSVG} from "../../../source/img/cudosIMG.svg"
import style from "../Clicker.module.css"
import {useTheme} from "@emotion/react"
const ClickerBtn = ({setIsRunning, setCount, time}) => {
    const {palette} = useTheme()

    return (
        <button
            id="button"
            onClick={(e) => handleClick(e, setIsRunning, setCount)}
            className={style.buttonClicker}
            style={{
                width: "180px",
                height: "max-content",
                border: "none",
                outline: "none",
                background: palette.neutral.secondary,
                boxShadow: "10px 10px 77px -7px rgba(0,0,0,0.35)",
                borderRadius: "20px",
                position: "relative",
                zIndex: "20",
                marginBottom: "70px",
                overflow: "hidden",
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
                sx={{
                    width: "180px",
                    marginLeft: "0",
                    borderRadius: "10px",
                    height: "10px",
                }}
            />
        </button>
    )
}

export {ClickerBtn}
