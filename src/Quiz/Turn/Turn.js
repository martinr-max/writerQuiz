import React from 'react';
import './Turn.css';
import Book from '../Book/Book';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';





const Turn = ({quizData, selectBookHandler, answerStatus, progress, handleOpenResultModal }) => {

    return(
        <React.Fragment>
       { progress < 100 ? 
        <div className="quiz_content">
            <div className="authorImageDiv">
                <img alt="author_img" src={quizData.author.imageUrl}></img>
                <Typography variant="subtitle2" component="h2">
                            {quizData.author.name}
                </Typography>
            </div>
             <div className="book_list_container">
                <ul>
                    {quizData && quizData.books.map(book => {
                        return <Book
                          book={book}
                          onAnswerSelected={selectBookHandler}
                          answerStatus={answerStatus} /> 
                    })}
                </ul>
            </div>
        </div> : <Button color="primary" onClick={e => handleOpenResultModal()}>Submit</Button> }
        </React.Fragment>
    );

}

export default Turn;