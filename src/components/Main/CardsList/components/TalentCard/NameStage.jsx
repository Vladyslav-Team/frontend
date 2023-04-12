import React from "react"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
import RefreshIcon from "@mui/icons-material/Refresh"
const NameStage = ({type, setSort, sort, refetch}) => {
    const handleChange = (event) => {
        setSort(event.target.value)
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
                        defaultValue={1}
                        value={sort}
                        autoWidth
                        MenuProps={{disableScrollLock: true}}
                        sx={{marginLeft: "25px"}}
                        onChange={handleChange}>
                        <MenuItem value={false}>From new to old</MenuItem>
                        <MenuItem value={true}>From old to new</MenuItem>
                    </Select>
                </Grid>
            )}
        </Grid>
    )
}

export {NameStage}
