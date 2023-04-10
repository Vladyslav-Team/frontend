const getConfirmBody = (param) => {
    switch (param) {
        case "hidden":
            return {
                title: "Change status to Hidden?",
                description:
                    "Are you sure you want to convert proof to Hidden status? You can no longer change the information.",
            }
        case "published":
            return {
                title: "Change status to Published?",
                description:
                    "Are you sure you want to convert proof to Published status? This information will be visible to all users.",
            }
        case "delete":
            return {
                title: "Remove proof?",
                description:
                    "Are you sure you want to delete the proof without being able to restore it?",
            }
        default:
            return {}
    }
}

export {getConfirmBody}
