import {Button, Dialog, DialogTitle, Grid} from "@mui/material"
import React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

const Payment = ({open, data, setOpenPayment}) => {
    const handleNext = () => {
        window.location = data.redirect_url
    }
    const handleCancel = () => {
        setOpenPayment(false)
    }

    return (
        <Dialog
            open={open}
            maxWidth="500px"
            sx={{
                "& .MuiDialog-container": {
                    "& .MuiPaper-root": {
                        width: "100%",
                        maxWidth: "500px",
                    },
                },
            }}>
            <DialogTitle>Buy reset time</DialogTitle>
            <div
                style={{
                    height: 200,
                    width: "100%",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                }}>
                <TableContainer component={Paper}>
                    <Table sx={{width: "100%"}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Payment System</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                sx={{"&:last-child td, &:last-child th": {border: 0}}}>
                                <TableCell component="th" scope="row">
                                    Reset Time
                                </TableCell>
                                <TableCell align="right">5$</TableCell>
                                <TableCell align="right" sx={{paddingRight: "40px"}}>
                                    <img
                                        width={"50px"}
                                        src="https://cdn-icons-png.flaticon.com/512/196/196566.png"
                                        alt=""
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Grid
                display={"flex"}
                justifyContent={"flex-end"}
                paddingRight={"20px"}
                paddingBottom={"5px"}>
                <Button
                    onClick={handleCancel}
                    variant="outlined"
                    size="small"
                    sx={{marginRight: "10px"}}>
                    Cancel
                </Button>
                <Button variant="outlined" size="small" onClick={handleNext}>
                    Next
                </Button>
            </Grid>
        </Dialog>
    )
}

export {Payment}
