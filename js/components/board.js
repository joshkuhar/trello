var React = require('react');
var ReactDOM = require('react-dom');
var Lists = require('./list');
var ListContainer = require('./list-container');

// var Board = function(props){
// 	var onAddSubmit = function(e){	
// 		e.preventDefault();
// 		return(console.log('I was clicked'));
// 	}
// 	return(
// 		<div>	
// 			{props.title}
// 			<Lists title={props.lists} content='Ace' onAddInputChanged={onAddInputChanged} onAddSubmit={onAddSubmit}/>
// 		</div>
// 		);
// };

var Board = function(props){
	return(
		<div>	
			<h2>{props.title}</h2>
			<ListContainer />
		</div>
		);
};

module.exports = Board;