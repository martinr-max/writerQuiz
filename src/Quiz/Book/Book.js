import React from 'react';
import Button from '@material-ui/core/Button';


const Book = ({book, onAnswerSelected}) => {

    return(  
        <div>
            <ul>
              <li><Button onClick={e => {onAnswerSelected(book)}}>{book}</Button></li>
            </ul>
        </div>
    );

}

export default Book;