import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import QuizForm from './Quiz/QuizForm/QuizForm';

function App() {

     return (
       <div>
         <Router>           
           <Route exact path="/" component={QuizForm} />
         </Router>  
      </div>
  );
}

export default App;
