import React from "react"
import {useGetSkillsByProofsQuery} from "../../pages/Profile/components/Aside/components/Content/components/Proof/api"
import {Skill} from "./components/Skill"
import {useJwtCheck} from "../../../shared/api/hooks"

const SkillsOnProof = ({idProof}) => {
    const skills = useGetSkillsByProofsQuery(idProof)
    const {data} = useJwtCheck()
    const isSponsor = data && data.scope === "ROLE_SPONSOR"

    return (
        <>
            {!skills.isLoading &&
                skills.data.skills.map((skill) => {
                    return (
                        <Skill
                            idProof={idProof}
                            skill={skill}
                            isSponsor={isSponsor}
                            key={skill.id}
                        />
                    )
                })}
        </>
    )
}

export {SkillsOnProof}
