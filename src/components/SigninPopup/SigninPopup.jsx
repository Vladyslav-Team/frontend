import React from "react"
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

const SigninPopup = ({setVisibilitySigninPopup, id, status}) => {
    const [updatePost, result] = useSigninTalentMutation()
    const {pathname} = useLocation()

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
        updatePost(data)
    }
    useEffect(() => {
        if (result.data) {
            const jwt = jwtDecode(result.data["jwt-token"])
            localStorage.setItem("jwt-token", result.data["jwt-token"])
            jwt && pathname.includes("/talents") && navigate(`/profile/${jwt.id}`)
            id && pathname === "/proofs" && navigate(`/proof/${id}`)
            id && setVisibilitySigninPopup({status: false})
            // id && AvatarIMG.refetch()
        }
    }, [id, navigate, result.data, setVisibilitySigninPopup])

    const SigninStyle = !status
        ? {position: "absolute", zIndex: 99}
        : {position: "fixed", zIndex: 101}
    return (
        <>
            <div
                className={styles.signin_background}
                style={{display: !setVisibilitySigninPopup ? "none" : "flex"}}
                onClick={() =>
                    setVisibilitySigninPopup && setVisibilitySigninPopup(false)
                }
            />
            <form
                className={styles.signin_form}
                onSubmit={handleSubmit(onSubmit)}
                style={SigninStyle}>
                <h2 className={styles.signin_form_elem}>Sign in</h2>
                <div className={styles.signin_form_elem}>
                    <label>Email</label>
                    <br />
                    <input
                        type="text"
                        {...register("username", registerOptions.email)}
                        className={styles.signin_form_elem}
                    />
                    {errors.username && (
                        <label className={styles.error}>{errors.username.message}</label>
                    )}
                </div>
                <div className={styles.signin_form_elem}>
                    <label>Password</label>
                    <br />
                    <input
                        type="password"
                        {...register("password", registerOptionsPassword)}
                        className={styles.signin_form_elem}
                    />
                    {errors.password && (
                        <p className={styles.error}>{errors.password.message}</p>
                    )}
                </div>
                <button
                    disabled={result.isLoading}
                    className={styles.signin_form_elem}
                    type="submit">
                    SIGN IN
                </button>
                <p className={styles.signin_form_elem}>or</p>
                <p>
                    Want to join SkillScope?{" "}
                    <NavLink
                        className={styles.signin_form_elem}
                        onClick={() =>
                            setVisibilitySigninPopup && setVisibilitySigninPopup(false)
                        }
                        to={"/talents/signup"}>
                        <b>Sign up</b>
                    </NavLink>
                </p>
            </form>
            {result.error && (
                <AlertError defaultStatus={true} massageError={result.error.message} />
            )}
        </>
    )
}

export {SigninPopup}
