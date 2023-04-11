import React, {useEffect, useState} from "react"
import styles from "./Content.module.css"
import {Proof} from "./components/Proof"
import {useJwtCheck} from "../../../../../../../shared/api/hooks"

const Content = () => {
    const [proofs, setProofs] = useState([])
    const {data} = useJwtCheck()

    useEffect(() => {
        setProofs([
            {
                title: "Very big title with many details",
                description:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro odio delectus nostrum vel consectetur, quos aliquid labore similique. Iusto magnam sit temporibus veniam laudantium ipsa quibusdam. Nemo, voluptate distinctio officiis quasi ducimus modi eaque cupiditate exercitationem vel dicta consectetur qui alias ipsam doloribus sit iusto tenetur similique libero sequi maxime.",
                data: "12.03.2022",
            },
            {
                title: "Title",
                description:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro odio delectus nostrum vel consectetur, quos aliquid labore similique. Iusto magnam sit temporibus veniam laudantium ipsa quibusdam. Nemo, voluptate distinctio officiis quasi ducimus modi eaque cupiditate exercitationem vel dicta consectetur qui alias ipsam doloribus sit iusto tenetur similique libero sequi maxime.",
                data: "12.03.2022",
            },
            {
                title: "Title",
                description:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro odio delectus nostrum vel consectetur, quos aliquid labore similique. Iusto magnam sit temporibus veniam laudantium ipsa quibusdam. Nemo, voluptate distinctio officiis quasi ducimus modi eaque cupiditate exercitationem vel dicta consectetur qui alias ipsam doloribus sit iusto tenetur similique libero sequi maxime.",
                data: "12.03.2022",
            },
            {
                title: "Title",
                description:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro odio delectus nostrum vel consectetur, quos aliquid labore similique. Iusto magnam sit temporibus veniam laudantium ipsa quibusdam. Nemo, voluptate distinctio officiis quasi ducimus modi eaque cupiditate exercitationem vel dicta consectetur qui alias ipsam doloribus sit iusto tenetur similique libero sequi maxime.",
                data: "12.03.2022",
            },
        ])
    }, [])

    return (
        <div className={styles.wrapper}>
            {proofs.map((proof, index) => {
                return <Proof key={index} proof={proof} />
            })}
        </div>
    )
}

export {Content}
