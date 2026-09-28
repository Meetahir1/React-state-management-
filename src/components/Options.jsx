import { useCallback, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4, } from 'uuid'
import { Mcq } from '../contexts/McqContext';

const Options = ({ option, obj, selected,id }) => {

    const { userAnswers: Answers, setUserAnswers: setAnswers } = useContext(Mcq)

    const toggleRadioButton = (option, questionId) => {
        if (Answers[questionId]?.submitted) return;

        setAnswers(prev => ({
            ...prev,
            [questionId]: {
                ...prev[questionId],
                submitted: false,
                selected: option
            }
        }))
    }

    return (
        <span className="flex gap-2">
            <input
                onChange={(e) => toggleRadioButton(option, obj.id)}
                type="radio"
                name={obj.question}
                id={id}
                checked={selected === option}
            />
            <label
                htmlFor={id}
            >
                {option}
            </label>
        </span>
    )
}
export default Options
