import {Button} from "@mui/material"
import React from "react"

const AddProof = ({idTalent, localTalentID, setPoopUP}) => {
    const handelOpenPoopUP = () => setPoopUP(true)
    const isYourAccount = idTalent === localTalentID
    return (
        <>
            {isYourAccount && (
                <Button onClick={handelOpenPoopUP} variant="contained">
                    Add Proof
                </Button>
            )}
        </>
    )
}

export {AddProof}
