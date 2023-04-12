import React, {useEffect, useState} from "react"
import styles from "./Content.module.css"
import {Proof} from "./components/Proof"
import {ContentActions} from "./components/ContentActions"

const Content = () => {
    const [proofs, setProofs] = useState([])

    useEffect(() => {
        setProofs([
            {
                title: "Very big title with many details",
                description:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro odio delectus nostrum vel consectetur, quos ",
                data: "12.03.2022",
            },
            {
                title: "Title",
                description:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro odio delectus nostrum vel consectetur, quos aliquid labore similique. Iusto magnam sit temporibus veniam laudantium ipsa quibusdam. Nemo, voluptate ",
                data: "12.03.2022",
            },
            {
                title: "Title",
                description:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro odio delectus nostrum vel consectetur, quos aliquid labore similique. Iusto magnam sit temporibus veniam laudantium ipsa quibusdam. Nemo, voluptate ",
                data: "12.03.2022",
            },
            {
                title: "Title",
                description:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro odio delectus nostrum vel consectetur, quos aliquid labore similique. Iusto magnam sit temporibus veniam laudantium ipsa quibusdam. Nemo, voluptate ",
                data: "12.03.2022",
            },
        ])
    }, [])

    return (
        <>
            <ContentActions />
            <div className={styles.wrapper}>
                {proofs.map((proof, index) => {
                    return <Proof key={index} proof={proof} />
                })}
            </div>
        </>
    )
}

export {Content}
