import React, {useState} from "react"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import {Grid, IconButton} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import {AddSkill} from "../../../../../../../../shared/components/AddSkill"

const Skill = ({name, color}) => {
    return (
        <Grid padding={"4px"}>
            <Chip label={name} color={color} />
        </Grid>
    )
}

const Skills = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const open = Boolean(anchorEl)
    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget)
    }
    return (
        <>
            <Stack direction="colum" spacing={"20px"} flexWrap={"wrap"}>
                <Skill name={"JAVA"} color="primary" />
                <Skill name={"JAVASCRIPT"} color="primary" />
                <Skill name={"GIT"} />
                <Skill name={"KOTLIN"} color="primary" />
                <Skill name={"GO"} color="primary" />
                <IconButton
                    onClick={handleOpen}
                    id="basic-button"
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}>
                    <AddIcon />
                </IconButton>
            </Stack>
            <AddSkill
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
        </>
    )
}

export {Skills}
