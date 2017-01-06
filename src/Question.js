import React, { Component } from 'react'
import './App.css'

export default class Question extends Component {
	state = {
		show: 'v',
	}
	render() {	
		const { show } = this.state;
		switch (show) {
			case 'a':
				return (
					<li onClick={() => this.setState({
						show: 'q'
					}) }>
						{this.props.a}
					</li>);
			case 'q':
				return (
					<li> {this.props.q} </li>
				);
			default:
				return (
					<li onClick={ () => 
					this.setState({show:'a'})}> ${this.props.v} </li>
				)
		}	
	}
};