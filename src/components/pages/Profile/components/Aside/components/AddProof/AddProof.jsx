import {useTheme} from "@emotion/react"
import {Button} from "@mui/material"
import React from "react"

const AddProof = ({idTalent, localTalentID, setPoopUP}) => {
    const handelOpenPoopUP = () => setPoopUP(true)
    const isYourAccount = idTalent === localTalentID
    const {palette} = useTheme()

    return (
        <>
            {isYourAccount && (
                <Button
                    onClick={handelOpenPoopUP}
                    variant="contained"
                    sx={{
                        bgcolor:
                            palette.mode === "dark" ? "#313131" : palette.primary.main,
                        color: "#ffffff",
                        "&:hover": {
                            bgcolor: palette.mode === "dark" ? "#212121" : "none",
                        },
                    }}>
                    Add Proof
                </Button>
            )}
        </>
    )
}

export {AddProof}
