var React = require('react');
var ReactDOM = require('react-dom');
var Lists = require('./list');

var Board = function(props){
	return(
		<div>	
			<Lists title='Deck 1' content='Ace'/>
		</div>
		);
};

module.exports = Board;