import React, { useMemo } from 'react'
import countryList from "../../../shared/api/constants/countries.json"
import { useForm } from "react-hook-form"
import styles from "./SignUp.module.css"

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()


  const onSubmit = (data) => {
      console.log(JSON.stringify(data));
  };

  const validatePassword = (value) => {
    // Check for invalid passwords - 8 identical characters
    if (/(\w)\1\1\1\1\1\1\1/.test(value)) {
      return "Must not contain 8 identical characters";
    }

    // Check for password requirements
    const requirementsRegex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?\\@[\]^_`{|}~]).{6,64}$/;
    if (!requirementsRegex.test(value)) {
      return "Use [a-z], [A-Z], [0-9], special char";
    }
  };

  const validateDate = (value) => {
    const today = new Date();
    const birthDate = new Date(value);
    if (birthDate.getTime() > today.getTime()) {
      return "Birth date cannot be later than today";
    }
  };

  const registerOptions = {
    name: { 
      required: "Name is required",
      pattern: {
        value: /^[a-zA-Z\s]*$/,
        message: "Name must be written in Latin"
      },
      minLength: {
        value: 1,
        message: "Name must have at least 1 characters"
      },
      maxLength: {
        value: 64,
        message: "Name must have maximum 64 characters"
      }
   },
   surname: {
      required: "Surname is required",
      pattern: {
        value: /^[a-zA-Z\s]*$/,
        message: "Surname must be written in Latin"
      },
      minLength: {
        value: 1,
        message: "Surname must have at least 1 characters"
      },
      maxLength: {
        value: 64,
        message: "Surname must have maximum 64 characters"
      }
   },
    email: { 
      required: "Email is required",
      pattern: {
        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
        message: "Not valid email. Must be examp@gmail.com"
      },
        minLength: {
        value: 5,
        message: "Email must have at least 5 characters"
      },
      maxLength: {
        value: 254,
        message: "Email must have maximum 254 characters"
      }
    },
    password: {
      required: "Password is required",
      validate: {
        message: validatePassword
      },
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      },
      maxLength: {
        value: 64,
        message: "Password must have maximum 64 characters"
      }
    },
    location: {
      required: "Location is required",
    },
    birthDate: {
      required: "Birth date is required",
      validate: {
        message: validateDate
      }
    }
  };

  return (
    <div className={styles.signup}>
        <h1>Monetize your Talent</h1>
        <div className={styles.form_wrap}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.input_wrap}> 
                <label htmlFor="name">Name</label>
                <input type="text" {...register("name", registerOptions.name)} />
                {errors.name && <p className={styles.error}>{errors.name.message}</p>}
              </div>
              <div className={styles.input_wrap}> 
              <label htmlFor="surname">Surname</label>
                <input type="text" {...register("surname", registerOptions.surname)} />
                {errors.surname && <p className={styles.error}>{errors.surname.message}</p>}
              </div>
              <div className={styles.input_wrap}> 
              <label htmlFor="email">Email</label>
                <input type="email" {...register("email",  registerOptions.email)} />
                {errors.email && <p className={styles.error}>{errors.email.message}</p>}
              </div>
              <div className={styles.input_wrap}> 
              <label htmlFor="password">Password</label>
                <input type="password" {...register("password", registerOptions.password)} />
                {errors.password && <p className={styles.error}>{errors.password.message}</p>}
              </div>
              <div className={styles.input_wrap}> 
              <label htmlFor="location">Location</label>
                <select {...register("location", registerOptions.location)}>
                <option value="">---- Select a country ----</option>
                {countryList.map(element => <option key={element.cca2}  value={element.name}>{element.name}</option>)}
                </select>
                {errors.location && <p className={styles.error}>{errors.location.message}</p>}
              </div>
              <div className={styles.input_wrap}> 
              <label htmlFor="birthDate">Date of Birth</label>
                <input type="date" max={new Date().toISOString().split('T')[0]} {...register("birthDate", registerOptions.birthDate)} />
                {errors.birthDate && <p className={styles.error}>{errors.birthDate.message}</p>}
              </div>
                <button type="submit">SIGN UP</button>
                </form>
                <p className={styles.or}>or</p>
                <p className={styles.login_check}>Already on SkillScope? <b>Log in</b></p>
        </div>
    </div>
  )
}

export {SignUp}