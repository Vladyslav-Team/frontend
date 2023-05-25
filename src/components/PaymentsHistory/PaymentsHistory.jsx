import * as React from "react"
import Box from "@mui/material/Box"
import {DataGrid} from "@mui/x-data-grid"
import {Grid} from "@mui/material"
import {Typography} from "@mui/material"
import {useHistoryPaymentsQuery} from "../Clicker/components/api"
import {useJwtCheck} from "../../shared/api/hooks"

const columns = [
    {
        field: "order_id",
        headerName: "Order ID",
        minWidth: 200,
    },
    {
        field: "status",
        headerName: "Status",
        minWidth: 150,
    },
    {
        field: "link",
        headerName: "Link",
        minWidth: 150,
    },
    {
        field: "create_date",
        headerName: "Create date",
        minWidth: 150,
    },
    {
        field: "update_date",
        headerName: "Update Date",
        minWidth: 150,
    },
    {
        field: "activation",
        headerName: "Activation",
        minWidth: 250,
    },
]

const PaymentsHistory = () => {
    const jwt = useJwtCheck()
    const {data} = useHistoryPaymentsQuery(jwt.data && jwt.data.id)
    return (
        <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"100%"}
            flexDirection={"column"}
            paddingTop={"80px"}>
            <Typography
                variant="h4"
                fontWeight={"600"}
                color={"primary"}
                paddingBottom={"10px"}>
                Payments History
            </Typography>
            <Box sx={{height: 400}}>
                {data && data.status !== "No orders were found. Try next time." ? (
                    <DataGrid rows={data ? data.orders : []} columns={columns} />
                ) : (
                    <Typography
                        fontWeight={"600"}
                        color={"primary"}
                        paddingBottom={"10px"}>
                        {data && data.status}
                    </Typography>
                )}
            </Box>
        </Grid>
    )
}

export {PaymentsHistory}
