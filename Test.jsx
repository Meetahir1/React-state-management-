import { useEffect, useState } from "react"

const Test = () => {
    const [quizState, setquizState] = useState(
        {
            q1: {
                selected: "Universally Unique Identifier",
                submitted: true
            },

            q2: {
                selected: "useState",
                submitted: false
            }
        }
    );

    const handleClick = () => {
        setquizState(prev => ({
            ...prev, ["q2"]: { ...prev["q2"], submitted: true }
        }))
    }

    useEffect(() => {
        console.log(quizState)
    },[quizState])


    return (
        <div onClick={handleClick} >
            Radhe Radhe
        </div>
    )
}

export default Test
