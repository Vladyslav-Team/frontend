import jwt_decode from "jwt-decode"

const useJwtCheck = () => {
    const localJwt = localStorage.getItem("jwt-token")
    const jwtDecodeData = localJwt && jwt_decode(localJwt)
    if (!jwtDecodeData) {
        return false
    }
    if (Date.now() >= jwtDecodeData.exp * 1000) {
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
