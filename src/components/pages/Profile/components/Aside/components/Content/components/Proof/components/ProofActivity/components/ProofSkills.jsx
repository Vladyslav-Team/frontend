import {Button, Chip, Grid, Tooltip} from "@mui/material"
import React, {useState} from "react"
import {useGetSkillsByProofsQuery} from "../../../api"
import {AddSkill} from "../../../../../../../../../../../../shared/components/AddSkill"
import AddIcon from "@mui/icons-material/Add"

const skillsData = {
    id: 4,
    skills: [],
}

const ProofSkills = ({proofId, talentId, status, isEditMode}) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const open = Boolean(anchorEl)
    const isAddSkills =
        skillsData.skills.length < 4 && status !== "PUBLISHED" && status !== "HIDDEN"
    const isHidden = status !== "HIDDEN"

    const isHaveSkills = skillsData.skills.length < 1
    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget)
    }
    const {data} = useGetSkillsByProofsQuery(proofId)

    let skills
    if (data && data.skills[0]) {
        skills =
            data &&
            data.skills.map((el) => {
                return (
                    <Tooltip arrow title={el.title} key={el.id}>
                        <Chip
                            label={el.title}
                            sx={{
                                marginRight: "5px",
                                marginBottom: "5px",
                                maxWidth: "70px",
                            }}
                            color={isHidden ? "primary" : "default"}
                        />
                    </Tooltip>
                )
            })
    } else {
        skills =
            data &&
            skillsData.skills.map((el) => {
                return (
                    <Tooltip arrow title={el.title} key={el.id}>
                        <Chip
                            label={el.title}
                            sx={{
                                marginRight: "5px",
                                marginBottom: "5px",
                                maxWidth: "70px",
                            }}
                            color={isHidden ? "primary" : "default"}
                        />
                    </Tooltip>
                )
            })
    }
    return (
        <Grid
            container
            position={"absolute"}
            left={isEditMode ? "20px" : "10px"}
            bottom={!isHaveSkills ? "-35px" : 0}
            height={"75px"}
            flexDirection={isEditMode ? "row" : "column"}
            width={"max-content"}
            alignItems={"center"}>
            {skills}
            {isAddSkills && (
                <>
                    <Button
                        variant="outlined"
                        onClick={handleOpen}
                        id="basic-button"
                        color="primary"
                        aria-label="upload picture"
                        component="label"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        size="small"
                        sx={{borderRadius: "16px"}}>
                        <AddIcon fontSize={"medium"} />
                    </Button>
                    <AddSkill
                        anchorEl={anchorEl}
                        setAnchorEl={setAnchorEl}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        proofId={proofId}
                        talentId={talentId}
                    />
                </>
            )}
        </Grid>
    )
}

export {ProofSkills}
