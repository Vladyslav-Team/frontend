import React, { useState } from "react";
import styles from "./LoginPopup.module.css";

const LoginPopup = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        if (email == "" || password == "") {
            event.preventDefault();
        }
    };

    return (
        <>
            <div className={styles.login_background} onClick={() => props.loginFormVisibility()}/>
            <form className={styles.login_form} onSubmit={handleSubmit}>
                <h2 className={styles.login_form_elem}>Log in</h2>
                <div className={styles.login_form_elem}>
                    <label>Email</label>
                    <br/>
                    <input className={styles.login_form_elem} type="email" name="login_email" onChange={handleEmailChange}/>
                </div>
                <div className={styles.login_form_elem}>
                    <label>Password</label>
                    <br/>
                    <input className={styles.login_form_elem} type="password" name="login_password" onChange={handlePasswordChange}/>
                </div>
                <button className={styles.login_form_elem} type="submit">LOG IN</button>
                <p className={styles.login_form_elem}>or</p>
                <p>Want to join SkillScope? <a className={styles.login_form_elem}><b>Sign up</b></a></p>
            </form>
        </>
    );
};

export { LoginPopup };