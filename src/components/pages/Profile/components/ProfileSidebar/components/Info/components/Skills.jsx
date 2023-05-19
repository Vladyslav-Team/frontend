import React, { useEffect, useState } from "react"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import { Grid, IconButton } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import { AddSkill } from "../../../../../../../../shared/components/AddSkill"
import { useDeleteSkillProfileMutation } from "../../../../../api"

const Skill = ({ name, color, skillId, talentId, refetch }) => {
    const [deleteSkill, result] = useDeleteSkillProfileMutation()

    const handleDelete = (skillId) => {
        deleteSkill({ talentId, skillId: skillId })
    }

    useEffect(() => {
        if (result.isSuccess) {
            refetch()
        }
    }, [refetch, result])

    return (
        <Grid padding={"4px"}>
            <Chip
                label={name}
                sx={{
                    marginRight: "5px",
                    marginBottom: "5px",
                    "& .MuiChip-deleteIcon": {
                        display: "none",
                    },
                    "&:hover": {
                        "& .MuiChip-deleteIcon": {
                            display: "block",
                            position: "absolute",
                            right: "0px",
                        },
                        backgroundColor: "red",
                    },
                }}
                onDelete={() => handleDelete(skillId)}
                color={color}
            />
        </Grid>
    )
}

const Skills = ({ skills, status, talentId, refetch }) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const open = Boolean(anchorEl)
    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget)
    }
    const skillsMap =
        skills &&
        skills.map((skill) => {
            return <Skill name={skill.title} color="primary" key={skill.id} skillId={skill.id} talentId={talentId} refetch={refetch} />
        })
    return (
        <>
            <Stack direction="colum" spacing={"20px"} flexWrap={"wrap"}>
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
                {skillsMap}
            </Stack>
            <AddSkill
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                skills={skills}
                status={status}
                talentId={talentId}
                refetch={refetch}
            />
        </>
    )
}

export { Skills }
