import React, {useEffect} from "react"
import {useCaptureMutation} from "../Clicker/components/api"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import loadingGIF from "../../source/img/animation_500_lhe137sd.gif"
import {Grid, Typography} from "@mui/material"
import {NavLink, useLocation} from "react-router-dom"
import {useJwtCheck} from "../../shared/api/hooks"

const Payment = () => {
    const location = useLocation()
    const [updatePost, result] = useCaptureMutation()
    const query = window.location.search.replace("?", "").split("&")
    const token = query[0].split("=")[1]
    const PayerID = query[1].split("=")[1]
    const jwt = useJwtCheck()

    useEffect(() => {
        if (token && PayerID) {
            updatePost({token, PayerID: PayerID, sponsorID: jwt.data.id})
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token, PayerID, updatePost, location.pathname])

    return (
        <div>
            {result.fulfilledTimeStamp ? (
                <>
                    <Typography
                        variant={"h1"}
                        fontWeight={"800"}
                        fontSize={"40px"}
                        color={"#0A6E9A"}
                        textAlign={"center"}>
                        SkillScope
                    </Typography>
                    <div
                        style={{
                            height: 200,
                            width: "100%",
                            paddingLeft: "30px",
                            paddingRight: "30px",
                            paddingTop: "30px",
                        }}>
                        <TableContainer component={Paper}>
                            <Table sx={{width: "100%"}} aria-label="simple table">
                                <TableHead></TableHead>
                                <TableBody>
                                    <TableRow
                                        sx={{
                                            "&:last-child td, &:last-child th": {
                                                border: 0,
                                            },
                                        }}>
                                        <TableCell component="th" scope="row">
                                            Total
                                        </TableCell>
                                        <TableCell align="right">5.99$</TableCell>
                                    </TableRow>
                                    <TableRow
                                        sx={{
                                            "&:last-child td, &:last-child th": {
                                                border: 0,
                                            },
                                        }}>
                                        <TableCell component="th" scope="row">
                                            Status
                                        </TableCell>
                                        <TableCell align="right">
                                            {result.data && result.data.status}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow
                                        sx={{
                                            "&:last-child td, &:last-child th": {
                                                border: 0,
                                            },
                                        }}>
                                        <TableCell component="th" scope="row">
                                            Need help?
                                        </TableCell>
                                        <TableCell align="right">
                                            skillscopeteam@gmail.com
                                        </TableCell>
                                    </TableRow>
                                    <TableRow
                                        sx={{
                                            "&:last-child td, &:last-child th": {
                                                border: 0,
                                            },
                                        }}>
                                        <TableCell component="th" scope="row">
                                            Date
                                        </TableCell>
                                        <TableCell align="right">
                                            {new Date(Date.now()).toISOString()}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <NavLink to={`/profile/${jwt.data.id}/KudosFarming`}>
                            <Typography
                                variant={"h6"}
                                fontWeight={"800"}
                                fontSize={"20px"}
                                color={"#0A6E9A"}
                                textAlign={"center"}>
                                Go to back
                            </Typography>
                        </NavLink>
                    </div>
                </>
            ) : (
                <Grid display={"flex"} justifyContent={"center"}>
                    <img src={loadingGIF} />
                </Grid>
            )}
        </div>
    )
}

export {Payment}
