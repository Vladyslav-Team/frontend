import React, {useLayoutEffect, useState} from "react"
import {TalentCard} from "./components/TalentCard"
import Grid from "@mui/material/Grid";
import { Transition } from 'react-transition-group';
const duration = 120;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 },
};

const CardsList = ({GetTalentsData}) => {
    const { data } = GetTalentsData
    const [contentChanged, setContentChanged] = useState()
    
    useLayoutEffect(()=> {
        setTimeout(() => {
            setContentChanged(false)
          },0);
        setContentChanged(true)
    }, [data])


    const talents = (state) => data && data.talents.map(talent => {
        return <Grid sx={{
            ...defaultStyle,
            ...transitionStyles[state]
        }} item key={talent.id} >
            {data && <TalentCard talent={talent} />}
        </Grid>
    })

    return (
        <>
            <h1 style={{paddingTop: "20px" , paddingLeft:"32px"}} >Talents</h1>
            <Grid container spacing={10} sx={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}>
            <Transition in={!contentChanged} timeout={300}>
                {(state) => (
                    <>
                        {talents && talents(state)}
                    </>
                )}
                </Transition>
            </Grid>
        </>
    )
}

export {CardsList}
