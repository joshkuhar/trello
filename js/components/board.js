var React = require('react');
var ReactDOM = require('react-dom');
var Lists = require('./list');

var Board = function(props){
	return(
		<div>	
			{props.title}
			<Lists title={props.lists} content='Ace'/>
			<Lists title={props.lists} content='Deuce'/>
			<Lists title={props.lists} content='Three'/>
		</div>
		);
};

module.exports = Board;