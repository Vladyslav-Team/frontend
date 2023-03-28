import React from "react"
import {useForm} from "react-hook-form"
import styles from "./LoginPopup.module.css"
// import {registerOptions} from "../pages/SignUp/validationRules.js"

const LoginPopup = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()
    const onSubmit = (data) => console.log(JSON.stringify(data))

    return (
        <>
            <div
                className={styles.login_background}
                // onClick={() => 0}
            />
            <form className={styles.login_form} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={styles.login_form_elem}>Log in</h2>
                <div className={styles.login_form_elem}>
                    <label>Email</label>
                    <br />
                    <input
                        type="text"
                        {...register("loginEmail", {required: true})} //registerOptions.email
                        className={styles.login_form_elem}
                    />
                    {/* {errors.loginEmail && <p className={styles.error}>{errors.loginEmail.message}</p>} */}
                </div>
                <div className={styles.login_form_elem}>
                    <label>Password</label>
                    <br />
                    <input
                        type="password"
                        {...register("loginPassword", {required: true})} //registerOptions.password.required, registerOptions.password.minLength, registerOptions.password.maxLength
                        className={styles.login_form_elem}
                    />
                    {/* {errors.loginPassword && <p className={styles.error}>{errors.loginPassword.message}</p>} */}
                </div>
                <button className={styles.login_form_elem} type="submit">
                    LOG IN
                </button>
                <p className={styles.login_form_elem}>or</p>
                <p>
                    Want to join SkillScope?{" "}
                    <a className={styles.login_form_elem}>
                        <b>Sign up</b>
                    </a>
                </p>
            </form>
        </>
    )
}

export {LoginPopup}
