import React, {useState, useEffect} from "react"
import Grid from "@mui/material/Grid"
import {ClickerBtn, Result, handleClose, Rules, Payment} from "./components"
import {Button} from "@mui/material"
import {useInitMutation} from "./components/api"
import LoadingButton from "@mui/lab/LoadingButton"

const Clicker = () => {
    const [count, setCount] = useState(0)
    const [time, setTime] = useState(100)
    const [isRunning, setIsRunning] = useState(false)
    const [open, setOpen] = useState(false)
    const [openPayment, setOpenPayment] = useState(false)
    const [initBuy, result] = useInitMutation()

    const handleInit = () => {
        initBuy()
    }
    useEffect(() => {
        setOpenPayment(true)
    }, [result.data])
    useEffect(() => {
        let intervalId
        if (isRunning) {
            intervalId = setInterval(() => setTime(time - 1), 10)
        }
        if (time === 0) {
            setOpen(true)
            clearInterval(intervalId)
        }
        return () => clearInterval(intervalId)
    }, [isRunning, time])

    const root = {
        backgroundColor: "#FFF",
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: "#FFF",
        },
    }

    return (
        <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            height={"100%"}
            paddingTop={"120px"}
            paddingBottom={"120px"}>
            <Grid
                item
                sx={{boxShadow: "-1px 68px 41px -11px rgba(0,0,0,0.44)"}}
                width={"480px"}
                paddingLeft={"30px"}
                paddingRight={"30px"}
                paddingBottom={"30px"}
                display={"flex"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                flexDirection={"column"}
                paddingTop={"80px"}>
                <ClickerBtn setIsRunning={setIsRunning} setCount={setCount} time={time} />
                <Rules open={open} />
                <LoadingButton
                    loading={result.isLoading}
                    onClick={handleInit}
                    variant="contained">
                    BUY RESET TIMER
                </LoadingButton>
            </Grid>
            {result.data && (
                <Payment
                    open={openPayment}
                    data={result.data}
                    setOpenPayment={setOpenPayment}
                />
            )}
            <Result
                count={count}
                handleClose={() => handleClose(setOpen, setIsRunning, setCount, setTime)}
                open={open}
            />
        </Grid>
    )
}

export {Clicker}
