import React, {useEffect, useState} from "react"
import styles from "./ProfileSidebar.module.css"
import {Avatar} from "../Avatar"
import {Button} from "@mui/material"
import {Info} from "./components/Info"
import {useTheme} from "@emotion/react"
import {getTalents} from "../../shared/api/services/getTalents"
import {NavLink} from "react-router-dom"

const ProfileSidebar = () => {
    const theme = useTheme()
    const [talent, setTalent] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        getTalents().then(() =>
            setTalent({
                id: 1,
                image: "https://steamuserimages-a.akamaihd.net/ugc/1484450726087316304/C905B58EE1DC4735A030C96AB80C247CC7930112/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
                age: 35,
                email: "johnd.1987@gmail.com",
                phone: "+380505812491",
                education: [
                    [
                        "Bachelor of Science in Computer Science University of California, Los Angeles",
                        "September 2015 - June 2019",
                    ],
                    [
                        "Master of Business Administration Stanford Graduate School of Business",
                        "September 2021 - June 2023 (Expected)",
                    ],
                ],
                socials: {
                    facebook: "/facebook",
                    instagram: "/instagram",
                    youtube: "/youtube",
                    linkedin: "/linkedin",
                },
            })
        )
        setIsLoaded(true)
    }, [])

    return (
        <div className={styles.sidebar}>
            {isLoaded ? (
                <>
                    <Avatar avatar={talent.image} size={180} style={styles.avatar} />
                    <Info talent={talent} />
                    <NavLink to={"/"}>
                        <Button
                            variant="outlined"
                            size="large"
                            sx={{
                                width: theme.spacing(30),
                                marginTop: theme.spacing(8),
                                borderRadius: theme.shape.borderRadius,
                            }}>
                            Edit
                        </Button>
                    </NavLink>
                </>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    )
}

export {ProfileSidebar}
