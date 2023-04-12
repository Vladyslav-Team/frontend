import React, {useState} from "react"
import {Grid, TextField} from "@mui/material"
import {useForm} from "react-hook-form"
import {useJwtCheck} from "../../../../../../../../../../../shared/api/hooks"
import {useNavigate} from "react-router-dom"

const ProofForm = ({title = "", description = ""}) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()
    const {data} = useJwtCheck()
    const navigate = useNavigate()
    const [formTitle, setFormTitle] = useState(title)
    const [formDescription, setFormDescription] = useState(description)

    const onSubmit = () => {
        console.log(formTitle)
        console.log(formDescription)
        navigate(`/profile/${data.id}`)
    }

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
                    value={formTitle}
                    onChange={(e) => {
                        setFormTitle(e.target.value)
                    }}
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
                    value={formDescription}
                    onChange={(e) => {
                        setFormDescription(e.target.value)
                    }}
                />
            </form>
        </Grid>
    )
}

export {ProofForm}
