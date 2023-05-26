import React from "react"
import styles from "./Content.module.css"
import {Proof} from "./components/Proof"
import {useStatisticQuery} from "./components/Proof/api"

const Content = ({allProofs}) => {
    const id = location.pathname.replace("/profile/", "").split("/")
    const staticsSkiils = useStatisticQuery({talentId: id, type: "skills"})
    const staticsProofs = useStatisticQuery({talentId: id, type: "proofs"})

    return (
        <div className={styles.wrapper}>
            {allProofs &&
                allProofs.data.proofs.map((proof, index) => {
                    return (
                        <Proof
                            key={index}
                            proof={proof}
                            allProofsRefetch={allProofs.refetch}
                            staticsSkiils={staticsSkiils.data}
                            staticsProofs={staticsProofs.data}
                        />
                    )
                })}
        </div>
    )
}

export {Content}
