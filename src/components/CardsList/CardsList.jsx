import React from "react"
import {useState, useEffect} from "react"
import {TalentCard} from "./components/TalentCard"
import {getTalents} from "../../shared/api/services/getTalents"

const CardsList = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [talents, setTalents] = useState([])

    useEffect(() => {
        getTalents().then((data) => {
            setTalents(data)
            setIsLoaded(true)
        })
    }, [])

    return (
        <>
            <h1>Talents</h1>
            <div>
                {isLoaded ? <TalentCard talent={talents[0]} /> : <div>Loading...</div>}
            </div>
        </>
    )
}

export {CardsList}
