const limitBirthDate = () => {
    let limitD = new Date()
    limitD.setFullYear(limitD.getFullYear() - 18)
    limitD.setHours(limitD.getHours() - limitD.getTimezoneOffset() / 60)
    return limitD
}

export {limitBirthDate}
