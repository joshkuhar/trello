var React = require('react');
var ReactDOM = require('react-dom');
var Lists = require('./list');
var Card = require('./card');

var Board = function(props){
	return(
		<div>	
			<Lists title='Deck 1'>
				<Card text='Ace' />
			</Lists>
		</div>
		);
};

module.exports = Board;