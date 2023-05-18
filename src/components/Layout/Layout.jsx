import React, {useState} from "react"
import {Grid} from "@mui/material"
import {SigninPopupContext} from "../../context"
import {SigninPopup} from "../SigninPopup"
import {Router} from "../../Router"
import {useTheme} from "@emotion/react"

const Layout = ({AvatarIMG}) => {
    const [visibilitySigninPopup, setVisibilitySigninPopup] = useState({
        status: false,
        id: null,
    })
    const theme = useTheme()

    return (
        <Grid sx={{bgcolor: theme.palette.neutral.main, pb: 10, flex: "1 0 auto"}}>
            <SigninPopupContext.Provider value={{setVisibilitySigninPopup}}>
                <Router AvatarIMG={AvatarIMG} />
            </SigninPopupContext.Provider>
            {visibilitySigninPopup.status && (
                <SigninPopup
                    setVisibilitySigninPopup={setVisibilitySigninPopup}
                    id={visibilitySigninPopup.id}
                    status={visibilitySigninPopup.status}
                />
            )}
        </Grid>
    )
}

export {Layout}
