import React from "react"
import styles from "./Info.module.css"
import {Skills} from "./components"
import {Box} from "@mui/material"
import {useTheme} from "@emotion/react"

const Info = ({user, refetch}) => {
    const {education, age, email, phone, skills: originalSkills, id} = {...user}

    const skills =
        originalSkills &&
        [...originalSkills].sort((a, b) => {
            const textA = a.skill.title.toUpperCase()
            const textB = b.skill.title.toUpperCase()
            return textA < textB ? -1 : textA > textB ? 1 : 0
        })

    const {palette} = useTheme()

    return (
        <Box
            sx={{
                "& > *:not(:last-child)": {
                    borderBottom: `1px solid ${
                        palette.mode === "dark"
                            ? palette.neutral.secondary
                            : palette.primary.main
                    }`,
                    wordWrap: "break-word",
                },
            }}
            className={styles.wrapper}>
            {age ? (
                <div>
                    <span>Age : </span>
                    <span>{age}</span>{" "}
                </div>
            ) : (
                <span></span>
            )}
            {email && (
                <div>
                    <span>Email : </span>
                    <span>{email}</span>
                </div>
            )}
            {phone && (
                <div>
                    <span>Phone : </span>
                    <span>+{phone}</span>
                </div>
            )}
            {education && (
                <div className={styles.education}>
                    <span>Education :</span> <p>{education}</p>
                </div>
            )}
            {skills && (
                <Skills
                    skills={skills}
                    status={"Profile"}
                    talentId={id}
                    refetch={refetch}
                />
            )}
        </Box>
    )
}

export {Info}
