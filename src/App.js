import React, { Component } from 'react';
// import logo from './logo.svg';
import Question from './Question'
import './App.css';

const data = [
  {
    title: 'One',
    questions: [
      { Q: 'What is the opposite of this?',      A: 'that' },
      { Q: 'Where are you going?',               A: 'No where, leave me alone' },
      { Q: 'Whats the name of that one song?',   A: 'I have no idea. Can you be more specific?' },
      { Q: 'Do you know whats-her-face?',        A: 'The one with the chin? Yeah I know her' },
      { Q: 'Whatever happened to whatser-face?', A: 'I dont want to talk about it' },
    ]  
  },
  {
    title: 'Two',
    questions: [
      { Q: 'What is the opposite of this?',      A: 'that' },
      { Q: 'Where are you going?',               A: 'No where, leave me alone' },
      { Q: 'Whats the name of that one song?',   A: 'I have no idea. Can you be more specific?' },
      { Q: 'Do you know whats-her-face?',        A: 'The one with the chin? Yeah I know her' },
      { Q: 'Whatever happened to whatser-face?', A: 'I dont want to talk about it' },
    ]  
  },
  {
    title: 'Three',
    questions: [
      { Q: 'What is the opposite of this?',      A: 'that' },
      { Q: 'Where are you going?',               A: 'No where, leave me alone' },
      { Q: 'Whats the name of that one song?',   A: 'I have no idea. Can you be more specific?' },
      { Q: 'Do you know whats-her-face?',        A: 'The one with the chin? Yeah I know her' },
      { Q: 'Whatever happened to whatser-face?', A: 'I dont want to talk about it' },
    ]  
  },
  {
    title: 'Four',
    questions: [
      { Q: 'What is the opposite of this?',      A: 'that' },
      { Q: 'Where are you going?',               A: 'No where, leave me alone' },
      { Q: 'Whats the name of that one song?',   A: 'I have no idea. Can you be more specific?' },
      { Q: 'Do you know whats-her-face?',        A: 'The one with the chin? Yeah I know her' },
      { Q: 'Whatever happened to whatser-face?', A: 'I dont want to talk about it' },
    ]  
  },
  {
    title: 'Five',
    questions: [
      { Q: 'What is the opposite of this?',      A: 'that' },
      { Q: 'Where are you going?',               A: 'No where, leave me alone' },
      { Q: 'Whats the name of that one song?',   A: 'I have no idea. Can you be more specific?' },
      { Q: 'Do you know whats-her-face?',        A: 'The one with the chin? Yeah I know her' },
      { Q: 'Whatever happened to whatser-face?', A: 'I dont want to talk about it' },
    ]  
  },
  {
    title: 'Six',
    questions: [
      { Q: 'What is the opposite of this?',      A: 'that' },
      { Q: 'Where are you going?',               A: 'No where, leave me alone' },
      { Q: 'Whats the name of that one song?',   A: 'I have no idea. Can you be more specific?' },
      { Q: 'Do you know whats-her-face?',        A: 'The one with the chin? Yeah I know her' },
      { Q: 'Whatever happened to whatser-face?', A: 'I dont want to talk about it' },
    ]  
  }  
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="game"> {
          data.map(col =>
            (<div className="col">
              <h3> {col.title} </h3>
                <ul className="questions"> {
                  col.questions.map((question, i) => (
                    <Question 
                      q={question.Q} 
                      a={question.A} 
                      v={(i + 1) * 200}/>
                  ))}
                </ul>
              </div>)
            )}          
        </div>
      </div>
    );
  }
}

export default App;
