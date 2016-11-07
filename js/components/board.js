var React = require('react');
var ReactDOM = require('react-dom');
var Lists = require('./list');



var Board = function(props){
	var onAddInputChanged = function() {
		return(console.log('I changed'));
	}
	var onAddSubmit = function(e){	
		e.preventDefault();
		return(console.log('I was clicked'));
	}
	return(
		<div>	
			{props.title}
			<Lists title={props.lists} content='Ace' onAddInputChanged={onAddInputChanged} onAddSubmit={onAddSubmit}/>
		</div>
		);
};

module.exports = Board;