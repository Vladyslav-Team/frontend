import React from "react"
import styles from "./Content.module.css"
import {Proof} from "./components/Proof"

const Content = ({allProofs, refetch}) => {
    return (
        <div className={styles.wrapper}>
            {allProofs &&
                allProofs.data.proofs.map((proof, index) => {
                    return (
                        <Proof
                            key={index}
                            proof={proof}
                            allProofsRefetch={allProofs.refetch}
                            refetch={refetch}
                        />
                    )
                })}
        </div>
    )
}

export {Content}
