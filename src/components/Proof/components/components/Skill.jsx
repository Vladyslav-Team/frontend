import React, {useEffect} from "react"
import {Chip, Tooltip, Typography} from "@mui/material"
import {useGetSkillKudosQuery} from "../../../AddKudosForm/api"

const Skill = ({idProof, skill, isSponsor}) => {
    const skillId = skill.id

    const SkillsKudosInfo = useGetSkillKudosQuery(
        {idProof, skillId},
        {
            refetchOnMountOrArgChange: true,
        }
    )

    const amount =
        SkillsKudosInfo.isSuccess && SkillsKudosInfo.currentData.amount_of_kudos
    const amountOfSponsor = isSponsor
        ? SkillsKudosInfo.isSuccess &&
          SkillsKudosInfo.currentData.amount_of_kudos_current_user + "/"
        : ""

    return (
        <Tooltip
            arrow
            title={
                <Typography
                    sx={{
                        fontSize: "15px",
                    }}>{`${skill.title} ${amountOfSponsor}${amount}`}</Typography>
            }>
            <Chip
                label={skill.title}
                sx={{
                    marginRight: "5px",
                    marginBottom: "5px",
                    maxWidth: "70px",
                }}
                color={"primary"}
            />
        </Tooltip>
    )
}

export {Skill}
