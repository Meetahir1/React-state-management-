import { createContext, useState } from "react"
import { questions } from "../../data";

export const Mcq = createContext(null)

const McqContext = ({ children,value }) => {
    const [userAnswers, setUserAnswers] = useState([]);

    return (
        <Mcq value={{ userAnswers, setUserAnswers }} >
            {children}
        </Mcq>
    )
}

export default McqContext;
