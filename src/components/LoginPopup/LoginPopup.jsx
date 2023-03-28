import React, {useState} from "react"
import {useForm} from "react-hook-form"
import styles from "./LoginPopup.module.css"

const LoginPopup = (props) => {
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => console.log(JSON.stringify(data))

    return (
        <>
            <div
                className={styles.login_background}
                onClick={() => props.loginFormVisibility()}
            />
            <form className={styles.login_form} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={styles.login_form_elem}>Log in</h2>
                <div className={styles.login_form_elem}>
                    <label>Email</label>
                    <br />
                    <input
                        type="email"
                        {...register("loginEmail", {
                            required: true,
                            minLength: 5,
                            maxLength: 254,
                        })}
                        className={styles.login_form_elem}
                    />
                </div>
                <div className={styles.login_form_elem}>
                    <label>Password</label>
                    <br />
                    <input
                        type="password"
                        {...register("loginPassword", {
                            required: true,
                            minLength: 8,
                            maxLength: 64,
                        })}
                        className={styles.login_form_elem}
                    />
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
