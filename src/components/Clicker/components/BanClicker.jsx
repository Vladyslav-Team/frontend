import React from "react"
import {Typography} from "@mui/material"

const BanClicker = () => {
    return (
        <div>
            <Typography
                variant="h2"
                fontSize={"20px"}
                fontWeight={"700"}
                sx={{color: "#000000"}}>
                {
                    "You can't use farm kudos today, come back tomorrow or you can reset the timer for only"
                }
                <br />
            </Typography>
            <div style={{display: "flex", justifyContent: "center"}}>
                <strong
                    style={{
                        color: "green",
                        textDecoration: "underline",
                        textAlign: "center",
                        fontSize: "25px",
                    }}>
                    5.99$
                </strong>
            </div>
        </div>
    )
}

export {BanClicker}
