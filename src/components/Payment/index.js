import React, {useEffect} from "react"
import {useCaptureMutation} from "../Clicker/components/api"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

//import { useSearchParams } from 'react-router-dom';
import {Typography} from "@mui/material"

const Payment = () => {
    const [updatePost, result] = useCaptureMutation()
    const query = window.location.search.replace("?", "").split("&")
    const token = query[0].split("=")[1]
    const PayerID = query[1].split("=")[1]
    useEffect(() => {
        if (token && PayerID) {
            updatePost({token, PayerID: PayerID})
            //  setTimeout(() =>{
            //     window.close();
            //  }, 2000)
        }
        //
    }, [token, PayerID, updatePost])

    return (
        <div>
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
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                sx={{"&:last-child td, &:last-child th": {border: 0}}}>
                                <TableCell component="th" scope="row">
                                    Reset Time
                                </TableCell>
                                <TableCell align="right">5$</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{"&:last-child td, &:last-child th": {border: 0}}}>
                                <TableCell component="th" scope="row">
                                    Status
                                </TableCell>
                                <TableCell align="right">
                                    {result.data && result.data.status}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export {Payment}
