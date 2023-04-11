const getConfirmBody = (option, status) => {
    if (!option || !status) {
        return {
            title: "Error",
            description:
                "Oops, something went wrong. Close this window and try the operation again.",
        }
    } else if (option === "delete") {
        return {
            title: "Remove proof?",
            description:
                "Are you sure you want to delete the proof without being able to restore it?",
        }
    } else if (status === "Draft") {
        if (option === "hidden") {
            return {
                title: "Change status to Hidden?",
                description:
                    "Are you sure you want to convert proof to Hidden status? You can no longer change the information.",
            }
        } else if (option === "published") {
            return {
                title: "Change status to Published?",
                description:
                    "Are you sure you want to convert proof to Published status? This information will be visible to all users.",
            }
        }
    } else if (status === "Hidden") {
        return {
            title: "Change status to Published?",
            description:
                "Are you sure you want to convert proof to Published status? This information will be visible to all users.",
        }
    } else if (status === "Published") {
        return {
            title: "Change status to Hidden?",
            description:
                "Are you sure you want to convert proof to Hidden status? The Proof will be visible only for you.",
        }
    }
}

export {getConfirmBody}
