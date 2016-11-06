var React = require('react');
var ReactDOM = require('react-dom');

// var text = "This is a card";

var Card = function(props){
	return(
		<div>
			{props.text}
		</div>
		)
} 	

module.exports = Card;