import jwt_decode from "jwt-decode"

const useJwtCheck = () => {
    const localJwt = localStorage.getItem("jwt-token")
    const jwtDecodeData = localJwt && jwt_decode(localJwt)
    if (!jwtDecodeData) {
        localStorage.removeItem("jwt-token")
        return false
    }
    if (Date.now() >= jwtDecodeData.exp * 1000) {
        localStorage.removeItem("jwt-token")
        return {
            data: false,
        }
    } else {
        return {
            data: jwtDecodeData,
        }
    }
}

export {useJwtCheck}
