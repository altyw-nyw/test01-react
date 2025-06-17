
import './App.css'
import { Quiz } from './components/Quiz'


function App() {
    const questionData={
        question: "Какой язык используется для создания интерфейсов в вебе?",
        options: ["Python", "JavaScript","C++","Java"],
        correctAnswer: "JavaScript"
    };
    return(
        <div className="app">
            <h1>Викторина</h1>
            <Quiz
            question={questionData.question}
            options={questionData.options}
            correctAnswer={questionData.correctAnswer}
            />
        </div>
    )
}

export default App;
