import React from 'react';
// import $ from 'jquery';
import store from '../store';

const QuestionModal = React.createClass({
	submitAnswer: function(e){
		e.preventDefault();
		let userAnswer = this.refs.useranswer.value;
		userAnswer.toLowerCase();
		let jeopardyAnswer = this.props.clue.answer;
		jeopardyAnswer.toLowerCase();
		if (userAnswer === jeopardyAnswer) {
			store.score.correctAnswer(this.props.clue);
		} else {
			store.score.wrongAnswer(this.props.clue);
		}
		this.props.hideModal();
	},
	render: function() {
		return (  
		  <div 
		  	className="modal-container">
				<form 
					className="modal question-modal"
					onSubmit={this.submitAnswer}>
					<h2>{this.props.clue.question}</h2>
					<input 
						type="text"
						className="input-answer"
						placeholder="type in your answer..."
						ref="useranswer"/>
					<input 
						type="submit" 
						className="submit-btn"
						value="submit answer"/>
					<input 
						type="button" 
						className="pass-btn"
						value="pass"
						onClick={this.submitAnswer}/>
				</form>
				<div 
					className="answer-reveal">
					{this.props.clue.answer}
				</div>
		  </div>
		);
	}
});

export default QuestionModal;