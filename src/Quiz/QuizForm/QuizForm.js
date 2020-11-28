import React, { useRef, useState, useEffect } from 'react';
import { createSelectionList, writers } from '../../Writers';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './QuizForm.css';
import Turn from '../Turn/Turn';
import { useHistory } from 'react-router';
import './QuizForm.css';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';
import ResultModal from '../../UI/ProgressBar/Modal/Modal';

export default function QuizForm() {

  const initialState = {
    writers,
    quizData: createSelectionList(writers),
  };

  const initialProgress = Number(window.localStorage.getItem('progress') || 0);
  const initialWrongAnswers = Number(window.localStorage.getItem('wrongAnswers') || 0);
  const initialRightAnswers = Number(window.localStorage.getItem('rightAnswers') || 0);

  let [progress, setProgress] = useState(initialProgress);
  let [rightAnswers, setRightAnswers] = useState(initialRightAnswers);
  let [wrongAnswers, setWrongAnswers] = useState(initialWrongAnswers);
  const [openResultModal, setOpenResultModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("progress", progress);
    localStorage.setItem('rightAnswers', rightAnswers);
    localStorage.setItem('wrongAnswers', wrongAnswers);
  }, [progress, rightAnswers, wrongAnswers]);

  const history = useHistory();
  const cardBackground = useRef(0);

  const refresh = async () => {
    setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    history.push({
      pathname: "/empty"
    });
    history.goBack();
  };

  const selectBookHandler = (title) => {
    let isCorrect = initialState.quizData.checkAnswer(title);
    if (isCorrect) {
      cardBackground.current.style.backgroundColor = "green";
      setTimeout(() => {
        setRightAnswers(prevAnswers => prevAnswers + 1);
        refresh();
      }, 1000)
    } else {
      cardBackground.current.style.backgroundColor = "#FF7F50";
      setTimeout(() => {
        setWrongAnswers(prevAnswers => prevAnswers + 1);
        refresh();
      }, 1000);
    }
  };

  const handleOpenResultModal = () => {
    setOpenResultModal(true);
  };

  const onFinishQuiz = () => {
    localStorage.removeItem('progress');
    localStorage.removeItem('wrongAnswers');
    localStorage.removeItem('rightAnswers');
    setOpenResultModal(false);
    refresh();
  };

  return (
    <React.Fragment>
            <ResultModal
             onFinishQuiz={onFinishQuiz}
             open={openResultModal}
             rightAnswers={rightAnswers}
             wrongAnswers={wrongAnswers}
              />
           <Container maxWidth="md" className="quiz_container" >
            <div className="progressBar">
                <ProgressBar progress={progress} /> 
            </div>
            <Card className="quiz_card" ref={cardBackground} style={{backgroundColor: "white" }}>
                <CardContent className="quiz_card_content">
                    <header className="quiz_header">
                        <Typography variant="h5" component="h2">
                            Book Quiz
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Select a right book
                        </Typography>
                    </header>
                    <section className="quiz_section">
                        <Turn
                          handleOpenResultModal={handleOpenResultModal}
                          quizData={initialState.quizData}
                          progress={progress}
                          onFinishQuiz={onFinishQuiz}
                         selectBookHandler={selectBookHandler} />
                    </section>
                </CardContent>
            </Card> 
           </Container>
    	 </React.Fragment>
  );
}
