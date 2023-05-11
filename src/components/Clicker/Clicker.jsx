import React, {useState, useEffect} from "react"
import Grid from "@mui/material/Grid"
import {ClickerBtn, Result, handleClose, Rules, Payment, BanClicker} from "./components"
import {useGetStatusQuery, useInitMutation} from "./components/api"
import LoadingButton from "@mui/lab/LoadingButton"
import {useJwtCheck} from "../../shared/api/hooks"
import Loader from "../../shared/components/Loader"

const Clicker = () => {
    const [count, setCount] = useState(0)
    const [time, setTime] = useState(100)
    const [isRunning, setIsRunning] = useState(false)
    const [open, setOpen] = useState(false)
    const [openPayment, setOpenPayment] = useState(false)
    const [initBuy, result] = useInitMutation()
    const jwt = useJwtCheck()
    const {data, isSuccess} = useGetStatusQuery(jwt.data.id, {
        refetchOnMountOrArgChange: true,
    })
    const handleInit = () => {
        jwt.data && initBuy(jwt.data.id)
    }
    const Content = () => {
        if (isSuccess === true && data === true) {
            return (
                <>
                    <ClickerBtn
                        setIsRunning={setIsRunning}
                        setCount={setCount}
                        time={time}
                    />
                    <Rules open={open} />
                </>
            )
        }
        if (isSuccess === true && data === false) {
            return (
                <>
                    <BanClicker />
                    <LoadingButton
                        loading={result.isLoading}
                        onClick={handleInit}
                        variant="contained">
                        BUY RESET TIMER
                    </LoadingButton>
                </>
            )
        }
        if (!isSuccess) {
            return (
                <>
                    <Loader isLoading={true} />
                </>
            )
        }
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
                maxHeight={"580px"}
                paddingLeft={"30px"}
                paddingRight={"30px"}
                paddingBottom={"30px"}
                display={"flex"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                flexDirection={"column"}
                paddingTop={"80px"}>
                {Content()}
            </Grid>
            {result.data && (
                <Payment
                    open={openPayment}
                    data={result.data}
                    setOpenPayment={setOpenPayment}
                />
            )}
            <Result
                count={Math.floor(count / 15)}
                handleClose={() => handleClose(setOpen, setIsRunning, setCount, setTime)}
                open={open}
            />
        </Grid>
    )
}

export {Clicker}
