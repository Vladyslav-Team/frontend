import React from "react"
import styles from "./Info.module.css"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHub from "@mui/icons-material/GitHub"
import {Skills} from "./components"
import {Box} from "@mui/material"
import {useTheme} from "@emotion/react"

const Info = ({talent}) => {
    const {education, age, email, phone, socials} = {...talent}
    const {facebook, twitter, github, linkedin} = {...socials}
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
            <Skills />
            <div className={styles.socialMedia}>
                {facebook && (
                    <a href={facebook}>
                        <FacebookIcon
                            sx={{color: "#3b5998", width: "38px", height: "38px"}}
                        />
                    </a>
                )}
                {twitter && (
                    <a href={twitter}>
                        <TwitterIcon
                            sx={{
                                color: "#1DA1F2",
                                width: "35px",
                                height: "35px",
                            }}
                        />
                    </a>
                )}
                {github && (
                    <a href={github}>
                        <GitHub sx={{width: "35px", height: "35px"}} />
                    </a>
                )}
                {linkedin && (
                    <a href={linkedin}>
                        <LinkedInIcon
                            sx={{color: "#0077b5", width: "38px", height: "38px"}}
                        />
                    </a>
                )}
            </div>
        </Box>
    )
}

export {Info}
