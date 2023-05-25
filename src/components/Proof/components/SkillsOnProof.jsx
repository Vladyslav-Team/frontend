import React from "react"
import {useGetSkillsByProofsQuery} from "../../pages/Profile/components/Aside/components/Content/components/Proof/api"
import {Chip, Tooltip} from "@mui/material"

const SkillsOnProof = ({idProof}) => {
    const skills = useGetSkillsByProofsQuery(idProof)
    return (
        <>
            {!skills.isLoading &&
                skills.data.skills.map((el) => {
                    return (
                        <Tooltip arrow title={el.title} key={el.id}>
                            <Chip
                                label={el.title}
                                sx={{
                                    marginRight: "5px",
                                    marginBottom: "5px",
                                    maxWidth: "70px",
                                }}
                                color={"primary"}
                            />
                        </Tooltip>
                    )
                })}
        </>
    )
}
export {SkillsOnProof}
