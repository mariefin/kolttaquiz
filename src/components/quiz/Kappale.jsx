import { useEffect, useState } from 'react';
import '../../index.css';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import { Link, useLocation } from 'react-router-dom';


function Kappale() {
    const location = useLocation();

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);
    const [satnit, setSatnit] = useState([{"tät": "tämä"}]);
    const [usedSatnit, setUsedSatnit] = useState([]);
    const [currentSatni, setCurrentSatni] = useState(0);
    const maxQuestions = 10;
    const [nextQuestion, setNextQuestion] = useState(true);
    const [checkQuestion, setQuestion] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [inputAnswer, setInputAnswer] = useState("");

    useEffect(() => {
        axios.get('/satnis/kappale.json').then(response => {
			let satnis = response.data;
			if (location.state !== null) {
                if (typeof location.state.kappale !== 'undefined') {
                    satnis = satnis.filter((x)=> x.kappale === location.state.kappale);
                } 
            }
            setSatnit(satnis);
            const satnisIndex = Math.floor(Math.random() * satnis.length);
            setCurrentSatni(satnisIndex);
            setUsedSatnit([satnis[satnisIndex]['saann']]);
        });
    }, [location.state]);
    
    const handleAnswerSelection = (questionIndex, selectedAnswer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[questionIndex] = selectedAnswer.trim();
        setInputAnswer(selectedAnswer);
        setAnswers(updatedAnswers);
    };

    const handleNewSatni = () => {
        const satniIndex = Math.floor(Math.random() * satnit.length);
        const chosenSatni = satnit[satniIndex]['saann'];
        if (usedSatnit.includes(chosenSatni)) {
            handleNewSatni();
        } else {
            setCurrentSatni(satniIndex);
            setUsedSatnit([...usedSatnit, chosenSatni]);
        }
    }


    const handleNextQuestion = () => {
        if (currentQuestion + 1 < maxQuestions) {
            setCurrentQuestion(currentQuestion + 1);
            // setCurrentSatni(Math.floor(Math.random() * satnit.length));
            handleNewSatni();
            setNextQuestion(true);
            setQuestion(false);
            setInputAnswer("");
            setShowAnswer(false);
        } else {
            setShowScore(true);
        }
    };

    const checkSatni = () => {
        if (answers[currentQuestion] === satnit[currentSatni]['saann'] ) {
            setScore(score + 1);
        }
        setShowAnswer(true);
        setNextQuestion(false);
        setQuestion(true);
    };

    const handleEnter = (e) => {
         if (e.key === 'Enter') {
            if (nextQuestion) {
                checkSatni();
            } else if (checkQuestion) {
                handleNextQuestion();
            }
        }
    }

    return (
      <>
        <Col>
            <h2>Harjoitellaan kappaleiden sanoja!</h2>
            {showScore ? (
        <div>
            <h2>Harjoitus tehty!</h2>
            <h3>Sait oikein: {score}/{maxQuestions}</h3>
            <Link to="/" className="btn btn-primary me-2 mb-2">Alkuun</Link>
        </div>
            ) : (
            <div>
                <h2>Sana {currentQuestion + 1}/{maxQuestions}</h2>
                <h3>{satnit[currentSatni]['suomi']}</h3>
                <div>
                <input
                    type="text"
                    onChange={(e) =>
                    handleAnswerSelection(currentQuestion, e.target.value)
                    }
                    onKeyDown = {(e) => handleEnter(e)}
                    className="custom-input"
                    value={inputAnswer}
                />
                </div>
                <button onClick={checkSatni} className="btn btn-primary mt-4 me-4" disabled={checkQuestion}>Tarkista vastaus</button>
                <button onClick={handleNextQuestion} className="btn btn-primary mt-4" disabled={nextQuestion}>Seuraava kysymys</button>
                {showAnswer &&
                    <div className="mt-2">Oikea vastaus: {satnit[currentSatni]['saann']}<br/>
                    Vastaus: {answers[currentQuestion]} </div>
                }
				<div className="mt-4"><Link to="/" className="btn btn-danger me-2 mb-2">Alkuun</Link></div>
            </div>
            )}
        </Col>
      </>
    )
  }
  
  export default Kappale