import React from "react"
import countryList from "../../../shared/api/constants/countries.json"
import {useForm} from "react-hook-form"
import {registerOptions} from "./validationRules"
import styles from "./SignUp.module.css"
import {NavLink} from "react-router-dom"
import {Endpoints} from "../../../shared/api/constants/endpoints"

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    const onSubmit = (data) => {
        console.log(JSON.stringify(data))
    }

    return (
        <div className={styles.signup}>
            <h1>Monetize your Talent</h1>
            <div className={styles.form_wrap}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.input_wrap}>
                        <label htmlFor="name">Name</label>
                        <input type="text" {...register("name", registerOptions.name)} />
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
                        <label htmlFor="birthDate">Date of Birth</label>
                        <input
                            type="date"
                            min="1900-01-01"
                            max={new Date().toISOString().split("T")[0]}
                            {...register("birthDate", registerOptions.birthDate)}
                        />
                        {errors.birthDate && (
                            <p className={styles.error}>{errors.birthDate.message}</p>
                        )}
                    </div>
                    <button type="submit">SIGN UP</button>
                </form>
                <p className={styles.or}>or</p>
                <p className={styles.login_check}>
                    Already on SkillScope?{" "}
                    <NavLink to={`${Endpoints.POST_TALENT_LOGIN}`}>
                        <b>Log in</b>
                    </NavLink>
                </p>
            </div>
        </div>
    )
}

export {SignUp}
