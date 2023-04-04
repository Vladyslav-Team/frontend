import React from "react"
import {useForm} from "react-hook-form"
import styles from "./LoginPopup.module.css"
import {registerOptions} from "../pages/SignUp/validationRules.js"
import {NavLink} from "react-router-dom"
import {useSigninTalentMutation} from "../../shared/api/services/authentication"
import {useNavigate} from "react-router-dom"
import {useEffect} from "react"
import {AlertError} from "../../shared/components"

const LoginPopup = ({setVisibilityLoginPopup, id, status}) => {
    const [updatePost, result] = useSigninTalentMutation()

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
        console.log(JSON.stringify(data))
        updatePost(data)
    }

    useEffect(() => {
        if (result.data) {
            localStorage.setItem("jwt-token", result.data["jwt-token"])
            navigate(`/profile/${id}`)
            setVisibilityLoginPopup({status: false})
        }
    }, [id, navigate, result.data, setVisibilityLoginPopup])

    const loginStyle = !status
        ? {position: "absolute", zIndex: 99}
        : {position: "fixed", zIndex: 101}
    console.log()
    return (
        <div>
            <div
                className={styles.login_background}
                style={{display: !setVisibilityLoginPopup ? "none" : "flex"}}
                onClick={() =>
                    setVisibilityLoginPopup && setVisibilityLoginPopup(false)
                }></div>

            {result.error && (
                <AlertError defaultStatus={true} massageError={result.error.message} />
            )}

            <form
                className={styles.login_form}
                onSubmit={handleSubmit(onSubmit)}
                style={loginStyle}>
                <h2 className={styles.login_form_elem}>Log in</h2>
                <div className={styles.login_form_elem}>
                    <label>Email</label>
                    <br />
                    <input
                        type="text"
                        {...register("username", registerOptions.username)}
                        className={styles.login_form_elem}
                    />
                    {errors.username && (
                        <p className={styles.error}>{errors.username.message}</p>
                    )}
                </div>
                <div className={styles.login_form_elem}>
                    <label>Password</label>
                    <br />
                    <input
                        type="password"
                        {...register("password", registerOptionsPassword)}
                        className={styles.login_form_elem}
                    />
                    {errors.password && (
                        <p className={styles.error}>{errors.password.message}</p>
                    )}
                </div>
                <button className={styles.login_form_elem} type="submit">
                    LOG IN
                </button>
                <p className={styles.login_form_elem}>or</p>
                <p>
                    Want to join SkillScope?{" "}
                    <NavLink
                        className={styles.login_form_elem}
                        onClick={() =>
                            setVisibilityLoginPopup && setVisibilityLoginPopup(false)
                        }
                        to={"/talents/signup"}>
                        <b>Sign up</b>
                    </NavLink>
                </p>
            </form>
        </div>
    )
}
export {LoginPopup}
