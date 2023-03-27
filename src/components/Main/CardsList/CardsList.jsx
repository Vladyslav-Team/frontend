import React from "react"
import {useState} from "react"
import {TalentCard} from "./components/TalentCard"


const CardsList = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [talents, setTalents] = useState([])

   
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
