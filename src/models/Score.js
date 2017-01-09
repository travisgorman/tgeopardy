import Backbone from 'backbone';
// import $ from 'jquery';
// import store from '../store';

const Score = Backbone.Model.extend({
	defaults: {
		answer: '',
		winnings: 0,
	},
	correctAnswer: function(clue) {
		let answer = clue.answer;
		let newScore = clue.value + this.get('winnings');
		this.set('winnings', newScore);
		this.set('answer', answer);
		this.trigger('change');
	},
	wrongAnswer: function(clue){
		let answer = clue.answer;
		let newScore = clue.value - this.get('winnings');
		this.set('winnings', newScore);
		this.set('answer', answer);
		this.trigger('change');
	},
});

export default Score;

