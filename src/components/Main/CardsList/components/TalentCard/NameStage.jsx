import React from "react"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
import RefreshIcon from "@mui/icons-material/Refresh"
import {useLocation, useNavigate} from "react-router-dom"

const NameStage = ({type, refetch}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const sort =
        location.search.split("&")[1] &&
        location.search.split("&")[1].replace("sort=", "")
    const typeSort = location.search.split("&")[1] ? sort : "newest"
    const handleChange = (event) => {
        if (!location.search.includes("sort")) {
            navigate(`${location.pathname}?page=1&sort=${event.target.value}`)
        }
        if (location.search.includes("sort")) {
            navigate(`${location.pathname}?page=1&sort=${event.target.value}`)
        }
    }

    return (
        <Grid
            container
            display={"flex"}
            flexDirection={"row"}
            width={"100%"}
            justifyContent={"space-between"}
            alignItems={"baseline"}>
            <h1
                style={{
                    paddingTop: "20px",
                    paddingLeft: "32px",
                    textTransform: "capitalize",
                }}>
                {type}
            </h1>
            {type === "proofs" && (
                <Grid item height={"5px"}>
                    <IconButton size="large" onClick={() => refetch()}>
                        <RefreshIcon />
                    </IconButton>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        value={typeSort}
                        autoWidth
                        MenuProps={{disableScrollLock: true}}
                        sx={{marginLeft: "25px"}}
                        onChange={handleChange}>
                        <MenuItem value={"newest"}>From new to old</MenuItem>
                        <MenuItem value={"oldest"}>From old to new</MenuItem>
                    </Select>
                </Grid>
            )}
        </Grid>
    )
}

export {NameStage}
