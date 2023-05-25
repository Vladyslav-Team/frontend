import React from "react"
import styles from "./Info.module.css"
import {Skills} from "./components"
import {Box} from "@mui/material"
import {useTheme} from "@emotion/react"

const Info = ({user, refetch}) => {
    const {education, age, email, phone, skills: originalSkills, id} = {...user}

    const skills =
        originalSkills &&
        [...originalSkills].sort((a, b) => a.skill.title.localeCompare(b.skill.title))

    const {palette} = useTheme()

    // const { facebook, twitter, github, linkedin } = { ...socials }

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
                <span>Age : 0 </span>
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
