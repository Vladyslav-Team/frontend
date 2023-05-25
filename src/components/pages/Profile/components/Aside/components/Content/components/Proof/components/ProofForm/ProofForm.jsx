import React from "react"
import {Grid, TextField} from "@mui/material"
import {registerOptions} from "../../../../../../../../../SignUp/validationRules"

const ProofForm = ({register, errors, onSubmit, handleSubmit}) => {
    return (
        <Grid padding={"5px 20px 0"}>
            <form id="proof-form" onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...register("title", registerOptions.proofTitle)}
                    error={errors.title}
                    helperText={errors.title && errors.title.message}
                    sx={{maxWidth: "60%"}}
                />
                <TextField
                    label="Description"
                    multiline
                    rows={10}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...register("description", registerOptions.proofDescription)}
                    error={errors.description}
                    helperText={errors.description && errors.description.message}
                    sx={{minHeight: "100px"}}
                />
            </form>
        </Grid>
    )
}

export {ProofForm}
