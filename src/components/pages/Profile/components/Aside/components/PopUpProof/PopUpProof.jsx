import React from "react"
import Dialog from "@mui/material/Dialog"
import {Proof} from "../Content/components/Proof"
const proof = {
    title: "",
    description: "",
    data: "",
    status: "DRAFT",
}
const PopUpProof = ({vis, setVis, allProofsRefetch}) => {
    return (
        <Dialog onClose={() => setVis(false)} open={vis}>
            <Proof
                proof={proof}
                isEditMode={true}
                statusVis={"Added"}
                setVis={setVis}
                allProofsRefetch={allProofsRefetch}
                styleObj={{width: "100%"}}
            />
        </Dialog>
    )
}

export {PopUpProof}
