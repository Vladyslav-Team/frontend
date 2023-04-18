import styled from "@emotion/styled"
import {Card} from "@mui/material"

export const StyledProof = styled(Card)(({theme}) => ({
    display: "flex",
    position: "relative",
    flexDirection: "column",
    width: "370px !important",
    minHeight: 260,
    [theme.breakpoints.down("lg")]: {
        minWidth: "100%",
        minHeight: 200,
    },
}))
