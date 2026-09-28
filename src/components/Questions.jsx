import { useContext } from "react"
import { questions } from "../../data"
import Options from "./Options"
import { Mcq } from "../contexts/McqContext"

const Questions = () => {

    const { userAnswers: Answers, setUserAnswers: setAnswers } = useContext(Mcq)

    const handleSubmit = (questionId) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: {
                ...prev[questionId],
                submitted: true
            }
        }))
    }


    return (
        <div className="h-full w-full overflow-y-auto">
            {questions.map((obj, idx) => {

                const questionStatus = Answers[obj.id] || { selected: '', submitted: false }

                const { selected, submitted } = questionStatus;

                return <div key={obj.id} >

                    <div className="text-lg font-medium">
                        {idx + 1}) {obj.question}
                    </div>

                    <div className="ml-4">
                        {obj.options.map((option, idx) => (<Options option={option} id={obj.id+idx} obj={obj} key={obj.id + idx} selected={selected} />))}
                    </div>

                    <button disabled={submitted} onClick={() => handleSubmit(obj.id)} className="bg-orange-500 text-black font-medium px-2 py-0.5 text-base rounded-sm my-2 disabled:opacity-50">Submit</button>

                </div>
            })}
        </div>
    )
}

export default Questions
