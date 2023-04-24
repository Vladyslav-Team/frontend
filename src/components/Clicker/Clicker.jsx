import React from "react"
import Grid from "@mui/material/Grid"
import {Box} from "@mui/material"
import {ReactComponent as CudosSVG} from "../../source/img/cudosIMG.svg"
import style from "./Clicker.module.css"

const Clicker = () => {
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
        particle.style.top = "40%"
        particle.style.left = "50%"

        const destinationX = x + (Math.random() - 4) * 2 * 65
        const destinationY = y + (Math.random() - 0.5) * 1 * 15

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

    const handleClick = (e) => {
        if (e.clientX === 0 && e.clientY === 0) {
            const bbox = document.querySelector("#button").getBoundingClientRect()
            const x = bbox.left + bbox.width / 2
            const y = bbox.top + bbox.height / 2
            for (let i = 0; i < 20; i++) {
                createParticle(x, y)
            }
        } else {
            for (let i = 0; i < 20; i++) {
                createParticle(e.clientX, e.clientY)
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
                height={"572px"}
                display={"flex"}
                justifyContent={"center"}
                paddingTop={"80px"}>
                <button
                    id="button"
                    onClick={handleClick}
                    className={style.buttonClicker}
                    style={{
                        height: "max-content",
                        border: "none",
                        background: "#ffff",
                        boxShadow: "10px 10px 77px -7px rgba(0,0,0,0.35)",
                        borderRadius: "20px",
                        position: "relative",
                        zIndex: "20",
                    }}>
                    <Box
                        width={"180px"}
                        height={"172px"}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}>
                        <CudosSVG width={"90px"} />
                    </Box>
                </button>
            </Grid>
        </Grid>
    )
}

export {Clicker}
