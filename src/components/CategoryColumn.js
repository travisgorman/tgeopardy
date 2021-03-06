import React from 'react'
// import $ from 'jquery'
// import store from '../store'
import QuestionPreview from './QuestionPreview'
import QuestionModal from './QuestionModal'

const CategoryColumn = React.createClass({

	getInitialState: function() {
		return {
			showModal: false
		};
	},
	hideModal: function() {
		this.setState({showModal: false});
	},
	render: function() {
		// let questionModal;
		if (this.state.showModal) {
			return (  
			  <QuestionModal
					hideModal={this.hideModal}
					removePreview={this.removePreview}
					clue={this.state.clue}/>
			)
			// questionModal = <QuestionModal
			// 									hideModal={this.hideModal}
			// 									removePreview={this.removePreview}
			// 									clue={this.state.clue}/>;
		}
		if (!this.props.clues) {
			return null;
		}
		let cluesObj = this.props.clues
			.map((clue, i) => {
				return (  
				  <QuestionPreview
				  	showModal={this.showModal}
				  	key={i}
				  	clue={clue}/>
				);
			});
		return (  
		  <div className="column-container">
		  	<h3>{this.props.title}</h3>
		  	<ul className="question-preview-container">
		  		{cluesObj}
		  	</ul>
		  </div>
		);
	}
});

export default CategoryColumn;