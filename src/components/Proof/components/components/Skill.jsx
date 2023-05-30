import React, {useEffect} from "react"
import {Chip, Tooltip, Typography} from "@mui/material"
import {useGetSkillKudosQuery} from "../../../AddKudosForm/api"

const Skill = ({idProof, skill, isSponsor, result = {data: null}}) => {
    const skillId = skill.id

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

    useEffect(() => {
        result?.data && skillsKudosInfo.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result.data, skillsKudosInfo.refetch])

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
                color="primary"
            />
        </Tooltip>
    )
}

export {Skill}
