import React, {useContext} from "react"
import {Logo} from "./components/Logo"
import styles from "./Header.module.css"
import {NavLink} from "react-router-dom"
import {Endpoints} from "../../shared/api/constants/endpoints"
import {useLocation} from "react-router-dom"
import {Avatar} from "../Avatar"
import {ArrowButton} from "./components/ArrowButton"
import {useJwtCheck} from "../../shared/api/hooks"
import {Box, Button, Grid, Switch, Typography} from "@mui/material"
import {ColorModeContext} from "../../themeSettings"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import {useTheme} from "@emotion/react"
import styled from "@emotion/styled"

const Header = ({AvatarIMG}) => {
    const {data} = useJwtCheck()
    let location = useLocation()
    const isSignup =
        location.pathname === "/talents/signup" || location.pathname === "/talents/signin"

    const isTalentsPage = location.pathname === "/talents"
    const isProofsPage = location.pathname === "/proofs"

    const {palette} = useTheme()
    const {toggleColorMode} = useContext(ColorModeContext)

    const handleColorMode = () => {
        toggleColorMode()
    }

    return (
        <Grid
            container
            sx={{
                display: "flex",
                flexWrap: "nowrap",
                position: "fixed",
                padding: "20px 32px",
                alignContent: "center",
                alignItems: "center",
                height: "55px",
                zIndex: 100,
                bgcolor: palette.primary.main,
            }}>
            <Grid className={styles.logo_wrap}>
                <NavLink to={"/talents?page=1"}>
                    <Logo />
                </NavLink>
            </Grid>
            <Box component={"nav"} className={styles.navigation}>
                <ul>
                    <li>
                        <NavLink to={"/talents?page=1"}>
                            <Typography
                                variant="h8"
                                className={`${styles.navItem} ${
                                    isTalentsPage && styles.active
                                }`}>
                                Talents
                            </Typography>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/proofs?page=1&sort=newest"}>
                            <Typography
                                variant="h8"
                                className={`${styles.navItem} ${
                                    isProofsPage && styles.active
                                }`}>
                                Proofs
                            </Typography>
                        </NavLink>
                    </li>
                </ul>
            </Box>
            {palette.mode === "light" ? (
                <LightModeIcon sx={{color: "#ffffff"}} />
            ) : (
                <DarkModeIcon />
            )}
            <Switch
                checked={palette.mode === "dark"}
                onClick={handleColorMode}
                color={palette.mode === "dark" ? "default" : "primary"}
            />
            {isSignup ? (
                <></>
            ) : (
                <Grid
                    className={styles.button_wrap}
                    sx={{
                        "& > a > button": {
                            border:
                                palette.mode === "dark" ? "none" : "1px solid #ffffff",
                            width: "105px",
                            height: "30px",
                            borderRadius: "20px",
                            backgroundColor:
                                palette.mode === "dark" ? "#ffffff" : "#0a6e9a",
                            color: palette.mode === "dark" ? "#000000" : "#ffffff",
                        },
                        "& > a > button:hover": {
                            backgroundColor:
                                palette.mode === "dark" ? "#989898" : "#ffffff",
                            color: palette.mode === "dark" ? "#ffffff" : "#0a6e9a",
                        },
                    }}>
                    {data ? (
                        <>
                            <NavLink to={`profile/${data.id}`}>
                                <Avatar
                                    avatar={AvatarIMG.data && AvatarIMG.data.image}
                                    size={40}
                                    style={styles.avatar}
                                />
                            </NavLink>
                            <ArrowButton id={data.id} />
                        </>
                    ) : (
                        <>
                            <NavLink to="/talents/signup">
                                <Button>SIGN UP</Button>
                            </NavLink>
                            <NavLink to={`${Endpoints.POST_TALENT_SIGNIN}`}>
                                <Button>SIGN IN</Button>
                            </NavLink>
                        </>
                    )}
                </Grid>
            )}
        </Grid>
    )
}

export {Header}
