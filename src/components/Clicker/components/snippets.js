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
