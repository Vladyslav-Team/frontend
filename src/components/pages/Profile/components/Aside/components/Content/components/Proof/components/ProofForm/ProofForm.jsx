import React, {useEffect, useState} from "react"
import {Grid, TextField} from "@mui/material"
import {useForm} from "react-hook-form"
import {useJwtCheck} from "../../../../../../../../../../../shared/api/hooks"
import {useNavigate} from "react-router-dom"
import {
    useAddProofMutation,
    useChangeStatusProofMutation,
} from "../../../../../../../../api"

const ProofForm = ({
    title = "",
    description = "",
    setVis,
    allProofsRefetch,
    register,
    errors,
    onSubmit,
    handleSubmit,
}) => {
    return (
        <Grid padding={"5px 20px 0"}>
            <form id="proof-form" onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...register("title", {required: true})}
                    error={errors.title}
                    helperText={errors.title && "Title is required"}
                    sx={{maxWidth: "60%"}}
                />
                <TextField
                    label="Description"
                    multiline
                    rows={10}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...register("description", {required: true})}
                    error={errors.text}
                    helperText={errors.text && "Text is required"}
                    sx={{minHeight: "100px"}}
                />
            </form>
        </Grid>
    )
}

export {ProofForm}
