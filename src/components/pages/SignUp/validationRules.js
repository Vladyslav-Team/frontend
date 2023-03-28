const validatePassword = (value) => {
    // Check for invalid passwords - 8 identical characters
    if (/(\w)\1\1\1\1\1\1\1/.test(value)) {
        return "Must not contain 8 identical characters"
    }
    // Check for password requirements
    const requirementsRegex =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?\\@[\]^_`{|}~]).{6,64}$/
    if (!requirementsRegex.test(value)) {
        return "Use [a-z], [A-Z], [0-9], special char"
    }
}

const validateDate = (value) => {
    const today = new Date()
    const birthDate = new Date(value)
    if (birthDate.getTime() > today.getTime()) {
        return "Birth date cannot be later than today"
    }
}

const registerOptions = {
    name: {
        required: "Name is required",
        pattern: {
            value: /^[a-zA-Z\s]*$/,
            message: "Name must be written in Latin",
        },
        minLength: {
            value: 1,
            message: "Name must have at least 1 characters",
        },
        maxLength: {
            value: 64,
            message: "Name must have maximum 64 characters",
        },
    },
    surname: {
        required: "Surname is required",
        pattern: {
            value: /^[a-zA-Z\s]*$/,
            message: "Surname must be written in Latin",
        },
        minLength: {
            value: 1,
            message: "Surname must have at least 1 characters",
        },
        maxLength: {
            value: 64,
            message: "Surname must have maximum 64 characters",
        },
    },
    email: {
        required: "Email is required",
        pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: "Not valid email. Must be examp@gmail.com",
        },
        minLength: {
            value: 5,
            message: "Email must have at least 5 characters",
        },
        maxLength: {
            value: 254,
            message: "Email must have maximum 254 characters",
        },
    },
    password: {
        required: "Password is required",
        validate: {
            message: validatePassword,
        },
        minLength: {
            value: 8,
            message: "Password must have at least 8 characters",
        },
        maxLength: {
            value: 64,
            message: "Password must have maximum 64 characters",
        },
    },
    location: {
        required: "Location is required",
    },
    birthDate: {
        required: "Birth date is required",
        validate: {
            message: validateDate,
        },
    },
}

export {registerOptions}
