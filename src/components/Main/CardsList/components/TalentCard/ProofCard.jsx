import React from "react"
import styles from "./TalentCard.module.css"
import Typography from "@mui/material/Typography"
import {SigninPopupContext} from "../../../../../context"
import {VisitButton} from "./components/VisitButton"
const ProofCard = ({talent}) => {
    return (
        <div style={{width: "470px", textOverflow: "ellipsis"}} className={styles.card}>
            <div
                style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                className={styles.background}>
                <h1 style={{color: "#ffff", fontSize: "20px"}}>
                    для языка программирования Java
                </h1>
            </div>
            <div className={styles.content}>
                <Typography variant="body1" gutterBottom>
                    {`"Пруф" для языка программирования Java - это доказательство, подтверждающее навыки и опыт пользователя в работе с этим языком. В качестве "пруфа" могут быть представлены различные проекты, созданные на Java, включая консольные приложения, веб-приложения, приложения для мобильных устройств и т.д.
                    `}
                </Typography>
            </div>

            <Typography variant="subtitle2" gutterBottom>
                11.05.2023
            </Typography>
            <SigninPopupContext.Consumer>
                {({setVisibilitySigninPopup}) => (
                    <VisitButton
                        setVisibilitySigninPopup={setVisibilitySigninPopup}
                        id={talent.id}
                        to="proof"
                    />
                )}
            </SigninPopupContext.Consumer>
        </div>
    )
}

export {ProofCard}
