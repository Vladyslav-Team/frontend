import {Button, Chip, Grid, Tooltip, Typography} from "@mui/material"
import React, {useEffect, useState} from "react"
import {useGetSkillsByProofsQuery, useDeleteSkillMutation} from "../../../api"
import {AddSkill} from "../../../../../../../../../../../../shared/components/AddSkill"
import AddIcon from "@mui/icons-material/Add"
import {useJwtCheck} from "../../../../../../../../../../../../shared/api/hooks"
import {useGetSkillKudosQuery} from "../../../../../../../../../../../AddKudosForm/api"

export const Skill = ({
    el,
    isPublished,
    handleDelete,
    isHidden,
    idProof,
    isSponsor,
    color,
}) => {
    const skillId = el.id
    const skillsKudosInfo = useGetSkillKudosQuery(
        {idProof, skillId},
        {
            refetchOnMountOrArgChange: true,
        }
    )

    let amount = skillsKudosInfo.isSuccess && skillsKudosInfo.data.amount_of_kudos
    let amountOfSponsor =
        skillsKudosInfo.isSuccess && isSponsor
            ? `${skillsKudosInfo.data.amount_of_kudos_current_user}/`
            : ""

    return (
        <Tooltip
            arrow
            title={
                <Typography
                    sx={{
                        fontSize: "15px",
                    }}>{`${el.title} ${
                    isPublished ? `${amountOfSponsor}${amount}` : ""
                }`}</Typography>
            }>
            <Chip
                label={el.title}
                sx={{
                    marginRight: "5px",
                    marginBottom: "5px",
                    maxWidth: "70px",
                    bgcolor: color,
                    "& .MuiChip-deleteIcon": {
                        display: "none",
                    },
                    "&:hover": {
                        "& .MuiChip-deleteIcon": {
                            display: isPublished ? "none" : "block",
                        },
                        backgroundColor: isPublished ? undefined : "red",
                    },
                }}
                onDelete={!isPublished ? () => handleDelete(el.id) : null}
                color={isHidden ? "primary" : "default"}
            />
        </Tooltip>
    )
}

const ProofSkills = ({
    proofId,
    talentId,
    status,
    isEditMode,
    statusVis,
    staticsSkiils,
}) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const open = Boolean(anchorEl)
    const {data, refetch} = useGetSkillsByProofsQuery(proofId)
    const [deleteSkill, result] = useDeleteSkillMutation()
    const isAddSkills =
        data === undefined ||
        (data.skills.length < 4 && status !== "PUBLISHED" && status !== "HIDDEN")
    const isHidden = status !== "HIDDEN"
    const isPublished = status === "PUBLISHED"
    const isAdded = statusVis === "Added"
    const isEdit = statusVis === "Edit"
    const jwt = useJwtCheck()
    const idProof = proofId
    let marginBottomForGridWrapper = 0
    const isHaveSkills = data === undefined || data.skills.length < 1
    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget)
    }
    const handleDelete = (skillId) => {
        deleteSkill({talentId, proofId, skillId: skillId})
    }

    useEffect(() => {
        if (result.isSuccess) {
            refetch()
        }
    }, [refetch, result])

    if (isPublished && data && data.skills.length === 1) {
        marginBottomForGridWrapper = -34
    } else if (isEdit) {
        marginBottomForGridWrapper = -12
    }
    const applyStats = (elementID) => {
        return (
            staticsSkiils &&
            staticsSkiils.mostKudosed.map((id) => {
                if (id === elementID) {
                    return "#f17e28"
                }
            })
        )
    }

    let skills
    if (data && data.skills[0]) {
        skills =
            data &&
            data.skills.map((el) => {
                let color = ""
                color = applyStats(el.id)

                return (
                    <Skill
                        el={el}
                        color={color}
                        isPublished={isPublished}
                        handleDelete={handleDelete}
                        isHidden={isHidden}
                        idProof={proofId}
                        isSponsor={jwt.data.scope === "ROLE_SPONSOR"}
                        key={el.id}
                    />
                )
            })
    }
    return !isAdded ? (
        <Grid
            container
            position={"absolute"}
            left={isEditMode ? "20px" : "10px"}
            bottom={!isHaveSkills ? "0px" : "-35px"}
            marginBottom={marginBottomForGridWrapper + "px"}
            height={"75px"}
            flexDirection={isEditMode ? "row" : "column"}
            width={"max-content"}
            alignItems={"center"}>
            {skills}
            {jwt.data.scope !== "ROLE_SPONSOR" && isAddSkills && (
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
                        refetch={refetch}
                        skillsByProof={data && data.skills}
                    />
                </>
            )}
        </Grid>
    ) : null
}

export {ProofSkills}
