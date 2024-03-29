import countriesList from "../../../shared/api/constants/countries.json"

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

const validateLocation = (value) => {
    const filterCountry = countriesList
        .map((country) => {
            if (value !== country.name) {
                return "This country not available"
            } else {
                return "This country available"
            }
        })
        .filter((el) => el === "This country available")
    if (!filterCountry[0]) {
        return "This country not available"
    }
}

const validateDate = (value) => {
    const today = new Date()
    const birthDate = new Date(value)
    if (birthDate.getTime() > today.getTime()) {
        return "Birth date cannot be later than today"
    }
    if (birthDate.getYear() < 0) {
        return "This date is too old. Please select a more recent date"
    }
}

const registerOptions = {
    name: {
        required: "Name is required",
        pattern: {
            value: /^[A-Za-z]+$/,
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
            value: /^[A-Za-z]+$/,
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
            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
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
        validate: {
            message: validateLocation,
        },
    },
    birthDate: {
        required: "Birth date is required",
        validate: {
            message: validateDate,
        },
    },
    birthDateEdit: {
        validate: {
            message: validateDate,
        },
    },
    about: {
        maxLength: {
            value: 1000,
            message: "About must have maximum 1000 characters",
        },
    },
    experience: {
        maxLength: {
            value: 100,
            message: "Experience must have maximum 100 characters",
        },
    },
    education: {
        maxLength: {
            value: 200,
            message: "Experience must have maximum 200 characters",
        },
    },
    link: {
        maxLength: {
            value: 200,
            message: "Link must have maximum 200 characters",
        },
    },
    proofTitle: {
        required: "This field is required",
        maxLength: {
            value: 100,
            message: "Title have maximum characters",
        },
        pattern: {
            value: /^[a-zA-Z0-9\s!"#$%&№'()*+,./:;<=>?@[\]^_`{|}~\\-]*$/,
            message: "Not a valid title",
        },
    },
    proofDescription: {
        maxLength: {
            value: 2000,
            message: "Description have maximum characters",
        },
        pattern: {
            value: /^[a-zA-Z0-9\s!"#$%&№'()*+,./:;<=>?@[\]^_`{|}~\\-]*$/,
            message: "Not a valid description",
        },
    },
    onlyLatin: {
        required: "This field is required",
        pattern: {
            value: /^[a-zA-Z0-9]+$/,
            message: "Must be written in Latin",
        },
    },
}

export {registerOptions}
