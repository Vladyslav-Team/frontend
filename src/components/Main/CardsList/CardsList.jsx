import React, {useLayoutEffect, useState} from "react"
import {TalentCard} from "./components/TalentCard"
import Grid from "@mui/material/Grid"
import {Transition} from "react-transition-group"
import styles from "./CardsList.module.css"

const duration = 120

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: {opacity: 0},
    entered: {opacity: 1},
    exiting: {opacity: 1},
    exited: {opacity: 0},
}

const CardsList = ({GetTalentsData}) => {
    const {data} = GetTalentsData
    const [contentChanged, setContentChanged] = useState()

    useLayoutEffect(() => {
        setTimeout(() => {
            setContentChanged(false)
        }, 0)
        setContentChanged(true)
    }, [data])

    const talents = (state) =>
        data &&
        data.talents.map((talent) => {
            return (
                <Grid
                    sx={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                    }}
                    item
                    key={talent.id}>
                    {data && <TalentCard talent={talent} />}
                </Grid>
            )
        })

    return (
        <div className={styles.wrapper}>
            <h1 style={{fontSize: "28px"}}>Talents</h1>
            <Grid
                container
                alignItems="center"
                rowSpacing={5}
                columnSpacing={9}
                justifyContent="center"
                mt={-3}>
                <Transition in={!contentChanged} timeout={300}>
                    {(state) => <>{talents && talents(state)}</>}
                </Transition>
            </Grid>
        </div>
    )
}

export {CardsList}
