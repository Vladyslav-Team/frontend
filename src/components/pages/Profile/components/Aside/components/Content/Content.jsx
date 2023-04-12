import React, {useEffect, useState} from "react"
import styles from "./Content.module.css"
import {Proof} from "./components/Proof"

const Content = ({allProofs}) => {
    return (
        <div className={styles.wrapper}>
            {allProofs &&
                allProofs.map((proof, index) => {
                    return <Proof key={index} proof={proof} />
                })}
        </div>
    )
}

export {Content}
