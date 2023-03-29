import React from "react"
import styles from "./Info.module.css"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import YouTubeIcon from "@mui/icons-material/YouTube"

const Info = ({talent}) => {
    const {age, email, phone, education, socials} = {...talent}
    const {facebook, instagram, youtube, linkedin} = {...socials}

    return (
        <div className={styles.wrapper}>
            {age && (
                <div>
                    Age : <span>{age}</span>{" "}
                </div>
            )}
            {email && (
                <div>
                    Email : <span>{email}</span>
                </div>
            )}
            {phone && (
                <div>
                    Phone : <span>{phone}</span>
                </div>
            )}
            {education && (
                <ul className={styles.education}>
                    Education :
                    {education.map((listItem, index) => {
                        return (
                            <li key={index}>
                                {listItem[0]}
                                <br />
                                {listItem[1]}
                            </li>
                        )
                    })}
                </ul>
            )}
            <div className={styles.socialMedia}>
                {facebook && (
                    <a href={facebook}>
                        <FacebookIcon
                            sx={{color: "#3b5998", width: "38px", height: "38px"}}
                        />
                    </a>
                )}
                {instagram && (
                    <a href={instagram}>
                        <InstagramIcon
                            sx={{
                                background:
                                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                                borderRadius: 0.8,
                                color: "#ffffff",
                                width: "30px",
                                height: "30px",
                            }}
                        />
                    </a>
                )}
                {youtube && (
                    <a href={youtube}>
                        <YouTubeIcon
                            sx={{color: "#cd201f", width: "50px", height: "40px"}}
                        />
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
        </div>
    )
}

export {Info}
