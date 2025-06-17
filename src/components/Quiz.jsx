import React from "react"
import { useState } from "react"

export const Quiz=({question,options,correctAnswer})=>{  
    const[selected, setSelected]=useState(null)
    const[right,setRight]=useState(false)

    const handleAnswer=(option)=>{
        setSelected(option)
        setRight(option===correctAnswer);
    };
        return(
            <div className="quiz">
              <h2>{question}</h2>
            <div>
            {options.map((option, index) => (
            <button
                key={index}
                onClick={() => handleAnswer(option)}
                style={{
                margin: "10px",
                padding: "10px 15px",
                backgroundColor: selected === option ? "#ccc" : "#eee",
                border: "1px solid #999",
                cursor: "pointer"
                }}
            >
                {option}
            </button>
        ))}
        </div>
        {selected && right && <p style={{ color: "green" }}>ПРАВИЛЬНО!</p>}
        {selected && !right && <p style={{ color: "red" }}>НЕПРАВИЛЬНО!</p>}
        </div>
  )
}
