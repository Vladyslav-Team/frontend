import React, {useEffect, useState} from "react"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import {Grid, IconButton} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import {AddSkill} from "../../../../../../../../shared/components/AddSkill"
import {useDeleteSkillProfileMutation} from "../../../../../api"
import {useLocation} from "react-router-dom"
import {useJwtCheck} from "../../../../../../../../shared/api/hooks"

const Skill = ({name, color, skillId, talentId, refetch, isHome}) => {
    const [deleteSkill, result] = useDeleteSkillProfileMutation()

    const handleDelete = (skillId) => {
        deleteSkill({talentId, skillId: skillId})
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
                        display: isHome ? "block" : "none",
                    },
                    "&:hover": {
                        backgroundColor: isHome ? "red" : "primary",
                    },
                }}
                onDelete={() => handleDelete(skillId)}
                color={color}
            />
        </Grid>
    )
}

const Skills = ({skills, status, talentId, refetch}) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const open = Boolean(anchorEl)
    const location = useLocation()
    const {data} = useJwtCheck()
    const idTalent = location.pathname.replace("/profile/", "")
    const isHome = +data.id === +idTalent

    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget)
    }
    const skillsMap =
        skills &&
        skills.map((skill) => {
            return (
                <Skill
                    name={skill.skill.title}
                    color="primary"
                    key={skill.skill.id}
                    skillId={skill.skill.id}
                    talentId={talentId}
                    refetch={refetch}
                    isHome={isHome}
                />
            )
        })
    return (
        <>
            <Stack direction="colum" spacing={"20px"} flexWrap={"wrap"}>
                {isHome && (
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
                )}
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

export {Skills}
