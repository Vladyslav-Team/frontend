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
import {useRef} from "react"
import {Line} from "react-chartjs-2"
import React from "react"

const createParticle = (x, y) => {
    const particle = document.createElement("particle")
    document.body.appendChild(particle)
    const size = Math.floor(Math.random() * 20 + 5) + 20
    particle.style.width = `${size}px`
    particle.style.height = `${size}px`
    particle.style.borderRadius = `${100}%`
    particle.style.background = "#fff"
    particle.style.border = `${2}px solid #9ccef1`
    particle.style.position = "absolute"
    particle.style.zIndex = "0"
    particle.style.top = "200px"
    particle.style.left = "50%"
    const destinationX = x + (Math.random() - 6) * 2 * 65
    const destinationY = y

    const animation = particle.animate(
        [
            {
                transform: "translate(-50%, -50%) rotate(360deg)",
                opacity: 1,
            },
            {
                transform: `translate(${destinationX}px, ${destinationY}px) rotate(90deg)`,
                opacity: 0,
            },
        ],
        {
            duration: Math.random() * 1000 + 500,
            easing: "cubic-bezier(0, .9, .57, 1)",
            delay: Math.random() * 200,
        }
    )

    animation.onfinish = () => {
        particle.remove()
    }
}

export const handleClose = async (setOpen, setIsRunning, setCount, setTime) => {
    await setOpen(false)
    setIsRunning(false)
    setCount(0)
    setTime(100)
}

export const handleClick = (e, setIsRunning, setCount) => {
    setIsRunning(true)
    if (e.clientX === 0 && e.clientY === 0) {
        const x = 600 / 2
        const y = 600 / 2
        for (let i = 0; i < 20; i++) {
            createParticle(x, y)
        }
    } else {
        for (let i = 0; i < 20; i++) {
            setCount((prev) => prev + 1)
            createParticle(700, 400)
        }
    }
}

let dataD = {}
export const statistic = Object.keys(localStorage)
    .filter((keys) => keys.split("-")[0] === "kudosFarmDate" && keys)
    .map((el) => {
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

export const Chart = () => {
    return <Line data={data} options={options} />
}
