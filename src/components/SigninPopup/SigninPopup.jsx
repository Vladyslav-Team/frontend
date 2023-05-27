import React, {useState} from "react"
import {useForm} from "react-hook-form"
import styles from "./SigninPopup.module.css"
import {registerOptions} from "../pages/SignUp/validationRules.js"
import {NavLink} from "react-router-dom"
import {useSigninTalentMutation} from "../../shared/api/services/authentication"
import {useNavigate} from "react-router-dom"
import {useEffect} from "react"
import {AlertError} from "../../shared/components"
import jwtDecode from "jwt-decode"
import {useLocation} from "react-router-dom"
import {Button, Paper, Typography} from "@mui/material"
import {useTheme} from "@emotion/react"

const SigninPopup = ({setVisibilitySigninPopup, id, status, AvatarIMG}) => {
    const [updatePost, result] = useSigninTalentMutation()
    const {palette} = useTheme()
    const location = useLocation()
    const [prevUrn] = useState(location.pathname + location.search + location.hash)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()
    const registerOptionsPassword = {
        required: registerOptions.password.required,
        minLength: registerOptions.password.minLength,
        maxLength: registerOptions.password.maxLength,
    }
    const onSubmit = (data) => {
        updatePost({body: data})
    }

    //refactor me
    useEffect(() => {
        const currentUrn = location.pathname + location.search + location.hash
        if (result.data) {
            const jwt = jwtDecode(result.data["jwt-token"])
            localStorage.setItem("jwt-token", result.data["jwt-token"])
            if (id && jwt) {
                navigate(`/profile/${id}`)
            } else {
                navigate(`/profile/${jwt.id}`)
            }
            id && location.pathname === "/proofs" && navigate(`/proof/${id}`)
            id && setVisibilitySigninPopup({status: false})
            AvatarIMG && AvatarIMG.refetch()
        }

        currentUrn !== prevUrn && setVisibilitySigninPopup({status: false})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, navigate, result.data, setVisibilitySigninPopup, location, prevUrn])

    // ----

    const SigninStyle = !status
        ? {position: "absolute", zIndex: 99}
        : {position: "fixed", zIndex: 101}
    return (
        <>
            <Paper
                sx={{
                    position: "fixed",
                    justifyContent: "center",
                    alignItems: "center",
                    top: 0,
                    height: "100%",
                    width: "100%",
                    background:
                        palette.mode === "dark" ? palette.primary.main : "#636363",
                    opacity: "50%",
                    cursor: "pointer",
                    zIndex: 101,
                }}
                style={{display: !setVisibilitySigninPopup ? "none" : "flex"}}
                onClick={() =>
                    setVisibilitySigninPopup && setVisibilitySigninPopup(false)
                }
            />
            <Paper
                sx={{
                    position: !status ? "absolute" : "fixed",
                    top: "20vh",
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "30px 50px 20px 50px",
                    width: "350px",
                    height: "360px",
                    textAlign: "center",
                    background:
                        palette.mode === "dark" ? palette.neutral.secondary : "#b5d3e1",
                    color: "#000000",
                    border: `2px solid ${palette.neutral.main}`,
                    borderRadius: "30px",
                    zIndex: !status ? 99 : 101,
                }}>
                <form onSubmit={handleSubmit(onSubmit)} style={SigninStyle}>
                    <h2 className={styles.signin_form_elem}>Sign in</h2>
                    <div className={styles.signin_form_elem}>
                        <Typography>Email</Typography>
                        <input
                            type="text"
                            {...register("username", registerOptions.email)}
                            className={styles.signin_form_elem}
                        />
                        {errors.username && (
                            <label className={styles.error}>
                                {errors.username.message}
                            </label>
                        )}
                    </div>
                    <div className={styles.signin_form_elem}>
                        <Typography>Password</Typography>
                        <input
                            type="password"
                            {...register("password", registerOptionsPassword)}
                            className={styles.signin_form_elem}
                        />
                        {errors.password && (
                            <p className={styles.error}>{errors.password.message}</p>
                        )}
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
                        disabled={result.isLoading}
                        type="submit">
                        SIGN IN
                    </Button>
                    <Typography className={styles.signin_form_elem}>or</Typography>
                    <Typography>
                        Want to join SkillScope?{" "}
                        <NavLink
                            className={styles.signin_form_elem}
                            onClick={() =>
                                setVisibilitySigninPopup &&
                                setVisibilitySigninPopup(false)
                            }
                            to={"/signup"}>
                            <b>Sign up</b>
                        </NavLink>
                    </Typography>
                </form>
            </Paper>
            {result.error && (
                <AlertError
                    defaultStatus={true}
                    massageError={
                        result.error.message === "Request failed with status code 401"
                            ? "The email address and password you entered do not match."
                            : result.error.message
                    }
                />
            )}
        </>
    )
}

export {SigninPopup}
