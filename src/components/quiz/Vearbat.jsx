import { useEffect, useState } from 'react';
import '../../index.css';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import VearbaHelper from './VearbaHelper';
import { Link, useLocation } from 'react-router-dom';


function Vearbat() {
    const location = useLocation();
    const randomSatneLuohka = () => {
        const satneLuohkat = ["ol1pres",
        "ol2pres",
        "ol3pres",
        "gl1pres",
        "gl2pres",
        "gl3pres",
        "ml1pres",
        "ml2pres",
        "ml3pres",
        "ol1pret",
        "ol2pret",
        "ol3pret",
        "gl1pret",
        "gl2pret",
        "gl3pret",
        "ml1pret",
        "ml2pret",
        "ml3pret",
        "presKielto",
        "pretKielto",
        "perfPart"]

        const randomNumber = Math.floor(Math.random() * satneLuohkat.length);
        return satneLuohkat[randomNumber];
    }

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);
    const [satnit, setSatnit] = useState([{"vearba": "leat"}]);
    const [currentSatni, setCurrentSatni] = useState(0);
    const maxQuestions = 10;
    const [satneLuohka, setSatneLuohka] = useState(randomSatneLuohka);
    const [nextQuestion, setNextQuestion] = useState(true);
    const [checkQuestion, setQuestion] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [inputAnswer, setInputAnswer] = useState("");

    useEffect(() => {
        axios.get('/satnis/vearba.json').then(response => {
            let satnis = response.data;
            if (location.state !== null) {
                if (typeof location.state.type !== 'undefined') {
                    satnis = satnis.filter((x)=> x.type === location.state.type);
                } 
                if (typeof location.state.vearba !== 'undefined') {
                    satnis = satnis.filter((x)=> x.vearba === location.state.vearba);
                }
            }
            setSatnit(satnis);
            setCurrentSatni(Math.floor(Math.random() * satnis.length));
        });
    }, [location.state]);
    
    const handleAnswerSelection = (questionIndex, selectedAnswer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[questionIndex] = selectedAnswer.trim();
        setInputAnswer(selectedAnswer);
        setAnswers(updatedAnswers);
    };


    const handleNextQuestion = () => {
        if (currentQuestion + 1 < maxQuestions) {
            setCurrentQuestion(currentQuestion + 1);
            setCurrentSatni(Math.floor(Math.random() * satnit.length));
            setSatneLuohka(randomSatneLuohka);
            setNextQuestion(true);
            setQuestion(false);
            setInputAnswer("");
            setShowAnswer(false);
        } else {
            setShowScore(true);
        }
    };

    const checkSatni = () => {
        if (answers[currentQuestion] === satnit[currentSatni][satneLuohka] ) {
            setScore(score + 1);
        }
        setShowAnswer(true);
        setNextQuestion(false);
        setQuestion(true);
    };

    return (
      <>
        <Col>
            <h2>Harjoitellaan verbejä!</h2>
            {showScore ? (
        <div>
            <h2>Harjoitus tehty!</h2>
            <h3>Sait oikein: {score}/{maxQuestions}</h3>
            <Link to="/" className="btn btn-primary me-2 mb-2">Alkuun</Link>
        </div>
            ) : (
            <div>
                <h2>Verbi {currentQuestion + 1}/{maxQuestions}</h2>
                <h3>{satnit[currentSatni]['suomi']}</h3>
                <VearbaHelper satneLuohka={satneLuohka} vearbaEnd={satnit[currentSatni]['ending']} vearbaType={satnit[currentSatni]['type']} vearba={satnit[currentSatni]['vearba']}/>
                <div>
                <input
                    type="text"
                    onChange={(e) =>
                    handleAnswerSelection(currentQuestion, e.target.value)
                    }
                    className="custom-input"
                    value={inputAnswer}
                />
                </div>
                <button onClick={checkSatni} className="btn btn-primary mt-4 me-4" disabled={checkQuestion}>Tarkista vastaus</button>
                <button onClick={handleNextQuestion} className="btn btn-primary mt-4" disabled={nextQuestion}>Seuraava kysymys</button>
                {showAnswer &&
                    <div className="mt-2">Oikea vastaus: {satnit[currentSatni][satneLuohka]}<br/>
                    Vastaus: {answers[currentQuestion]} </div>
                }
                <div className="mt-4"><Link to="/" className="btn btn-danger me-2 mb-2">Alkuun</Link></div>
            </div>
            )}
        </Col>
      </>
    )
  }
  
  export default Vearbat