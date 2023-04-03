import React, {useEffect, useState} from "react"
import styles from "./Profile.module.css"
import {ProfileSidebar} from "./components/ProfileSidebar"
import {Aside} from "./components/Aside"

const Profile = () => {
    const [talent, setTalent] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setTalent({
            id: 1,
            name: "Billy",
            surname: "Herrington",
            location: "North Babylon",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqghHTeMq3Qm98GfOQbr2TaNJxoj3AYsX1TEZ0N9GCmCqCYv0osGYwl4k2bFgsa3433qI&usqp=CAU",
            age: 35,
            email: "johnd.1987@gmail.com",
            phone: "+380505812491",
            education: [
                [
                    "Bachelor of Science in Computer Science University of California, Los Angeles",
                    "September 2015 - June 2019",
                ],
                [
                    "Bachelor of Science in Computer Science University of California, Los Angeles",
                    "September 2015 - June 2019",
                ],
            ],
            socials: {
                facebook: "/facebook",
                instagram: "/instagram",
                github: "/github",
                linkedin: "/linkedin",
            },
            biography:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iste molestiae similique harum vitae maxime temporibus aliquid rerum quo veritatis! Expedita officiis libero earum maxime atque, modi repudiandae nesciunt in officia ratione. Culpa quod consequuntur quae in nemo numquam molestiae voluptatibus, aliquam est delectus! Libero ad quae, similique harum nulla perspiciatis. Illum corrupti architecto non quas aliquam ad, nisi, beatae ea enim eligendi sed repudiandae repellat dolores rem, magni ipsa mollitia dignissimos deleniti dolorem id possimus harum laboriosam hic vero. Odit molestias quo fugiat porro eum repudiandae accusamus quod enim, debitis optio numquam assumenda tempora voluptatem quasi dicta corporis aliquid. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis facilis ducimus accusamus, similique quam tempore amet nisi tempora aut laborum!",
        })

        setIsLoaded(true)
    }, [])

    return (
        <>
            {isLoaded ? (
                <>
                    <div className={styles.plug}></div>
                    <div className={styles.wrapper}>
                        <ProfileSidebar talent={talent} />
                        <Aside talent={talent} />
                    </div>
                </>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    )
}

export {Profile}
