import {Typography} from "@mui/material"
import React, {useEffect, useRef} from "react"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"
import {Line} from "react-chartjs-2"
let dataD = {}
const statistic = Object.keys(localStorage)
    .filter((keys) => keys.split("-")[0] === "kudosFarmDate" && keys)
    .map((el, i) => {
        return (dataD[[el.split("-")[1]]] = localStorage.getItem(el))
    })

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Kudos",
        },
    },
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const keysSorted = Object.entries(dataD)
let sorted = keysSorted.sort((a, b) => a[0] - b[0])
const labels = sorted.map((el) => new Date(+el[0]).toLocaleDateString("en-US"))

sorted.map((el) => console.log())

const data = {
    labels,
    datasets: [
        {
            label: "Kudos score",
            data: sorted.map((el) => +el[1]),
            borderColor: "#0a6f9a",
            backgroundColor: "#09658c",
        },
    ],
}

const Rules = ({open}) => {
    const chart = useRef()
    useEffect(() => {
        //  if(!open && chart.current ){
        //     setTimeout(() => {
        //         chart.current.chartInstance.update();
        //       }, 0);
        //  }
    }, [open])

    return (
        <>
            {!statistic[0] ? (
                <>
                    <Typography
                        textAlign={"center"}
                        variant="h4"
                        fontWeight={"800"}
                        paddingBottom={"5px"}>
                        {"Let's start farming Kudos"}
                    </Typography>
                    <Typography
                        textAlign={"center"}
                        variant="h5"
                        fontWeight={"800"}
                        paddingBottom={"5px"}>
                        {"Rules"}
                    </Typography>
                    <Typography variant="body1">
                        1. Press the Kudos button as fast as possible for a set amount of
                        time (e.g., 1 minute). <br />
                        2. For each press of the Kudos button, you will receive points.
                        <br />
                        3. At the end of the time period (e.g. after 1 minute), the sum of
                        all points you have earned will be tallied and entered into the
                        results table.
                        <br />
                        4. If you press the Kudos button too often or too slowly, it may
                        result in the temporary blocking of your account or the
                        cancellation of your points.
                        <br />
                        5. You can participate in Kudos farming multiple times per day,
                        but each time a new time period will be set for farming.
                        <br />
                    </Typography>
                </>
            ) : (
                <>
                    <Line ref={chart} data={data} options={options} />
                </>
            )}
        </>
    )
}

export {Rules}
