import React from "react"
import {useForm} from "react-hook-form"
import styles from "./SigninPopup.module.css"
import {registerOptions} from "../pages/SignUp/validationRules.js"
import {NavLink} from "react-router-dom"

const SigninPopup = ({setVisibilitySigninPopup}) => {
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

    const onSubmit = () => {}

    const SigninStyle = !setVisibilitySigninPopup
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
                        {...register("signinEmail", registerOptions.email)}
                        className={styles.signin_form_elem}
                    />
                    {errors.signinEmail && (
                        <label className={styles.error}>
                            {errors.signinEmail.message}
                        </label>
                    )}
                </div>
                <div className={styles.signin_form_elem}>
                    <label>Password</label>
                    <br />
                    <input
                        type="password"
                        {...register("signinPassword", registerOptionsPassword)}
                        className={styles.signin_form_elem}
                    />
                    {errors.signinPassword && (
                        <p className={styles.error}>{errors.signinPassword.message}</p>
                    )}
                </div>
                <button className={styles.signin_form_elem} type="submit">
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
        </>
    )
}

export {SigninPopup}
