import React, {useEffect} from "react"
import countryList from "../../../shared/api/constants/countries.json"
import {useForm} from "react-hook-form"
import {registerOptions} from "./validationRules"
import styles from "./SignUp.module.css"
import {useAddTalentsMutation} from "../../../shared/api/services/authentication"
import {NavLink} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import {AlertError} from "../../../shared/components"
import jwtDecode from "jwt-decode"
import {Button, Paper} from "@mui/material"
import {useTheme} from "@emotion/react"
const SignUp = ({AvatarIMG}) => {
    const [updatePost, result] = useAddTalentsMutation()
    const navigate = useNavigate()
    const {palette} = useTheme()
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    const onSubmit = (data) => {
        const res = data
        const isSponsor = data.roles
        const role = isSponsor ? "sponsors" : "talents"
        res.birthday = data.birthday.split("-").reverse().join("-")
        res.roles = Array(isSponsor ? "SPONSOR" : "TALENT")
        updatePost({role, body: JSON.stringify(res)})
    }
    useEffect(() => {
        if (result.data) {
            localStorage.setItem("jwt-token", result.data["jwt-token"])
            result.data &&
                navigate(`/profile/${jwtDecode(result.data["jwt-token"]).id}/edit`)
            AvatarIMG.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigate, result.data])

    return (
        <>
            <div className={styles.signup}>
                <h1>Monetize your Talent</h1>
                <Paper
                    sx={{
                        position: "relative",
                        margin: "0 auto",
                        display: "flex",
                        width: "320px",
                        height: "580px",
                        background:
                            palette.mode === "dark"
                                ? palette.neutral.secondary
                                : "#b5d3e1",
                        color: "#000000",
                        border: `2px solid ${palette.neutral.main}`,
                        borderRadius: "30px",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        top: "-30px",
                    }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.input_wrap}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                {...register("name", registerOptions.name)}
                            />
                            {errors.name && (
                                <p className={styles.error}>{errors.name.message}</p>
                            )}
                        </div>
                        <div className={styles.input_wrap}>
                            <label htmlFor="surname">Surname</label>
                            <input
                                type="text"
                                {...register("surname", registerOptions.surname)}
                            />
                            {errors.surname && (
                                <p className={styles.error}>{errors.surname.message}</p>
                            )}
                        </div>
                        <div className={styles.input_wrap}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                {...register("email", registerOptions.email)}
                            />
                            {errors.email && (
                                <p className={styles.error}>{errors.email.message}</p>
                            )}
                        </div>
                        <div className={styles.input_wrap}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                {...register("password", registerOptions.password)}
                            />
                            {errors.password && (
                                <p className={styles.error}>{errors.password.message}</p>
                            )}
                        </div>
                        <div className={styles.input_wrap}>
                            <label htmlFor="location">Location</label>
                            <select {...register("location", registerOptions.location)}>
                                <option value="">---- Select a country ----</option>
                                {countryList.map((element) => (
                                    <option key={element.cca2} value={element.name}>
                                        {element.name}
                                    </option>
                                ))}
                            </select>
                            {errors.location && (
                                <p className={styles.error}>{errors.location.message}</p>
                            )}
                        </div>
                        <div className={styles.input_wrap}>
                            <label htmlFor="birthday">Date of Birth</label>
                            <input
                                type="date"
                                min="1900-01-01"
                                max={new Date().toISOString().split("T")[0]}
                                {...register("birthday", registerOptions.birthday)}
                            />
                            {errors.birthday && (
                                <p className={styles.error}>{errors.birthday.message}</p>
                            )}
                        </div>
                        <div className={styles.input_wrap}>
                            <label htmlFor="roles">Sponsor:</label>
                            <input
                                className={styles.checkbox}
                                type="checkbox"
                                {...register("roles", {})}
                            />
                        </div>
                        <Button
                            sx={{
                                background:
                                    palette.mode === "dark"
                                        ? palette.primary.main
                                        : palette.neutral.main,

                                justifyContent: "center",
                                width: "100px",
                                height: "30px",
                                margin: "0 auto",
                                color:
                                    palette.mode === "dark"
                                        ? palette.neutral.secondary
                                        : palette.primary.main,
                                borderRadius: "400px",
                                "&:hover": {
                                    background:
                                        palette.mode === "dark"
                                            ? palette.neutral.main
                                            : palette.primary.main,
                                    color: "#ffffff",
                                },
                            }}
                            type="submit">
                            SIGN UP
                        </Button>
                    </form>
                    <p className={styles.or}>or</p>
                    <p className={styles.signin_check}>
                        Already on SkillScope?{" "}
                        <NavLink className={styles.signin_form_elem} to={"/signin"}>
                            Sign in
                        </NavLink>
                    </p>
                </Paper>
            </div>
            {result.error && (
                <AlertError
                    defaultStatus={true}
                    massageError={"This e-mail is already taken"}
                />
            )}
        </>
    )
}

export {SignUp}
