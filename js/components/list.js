var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');

var List = function(props) {
	return (
		<div>
			<h3>List</h3>
				<Card text={props.cards} />
				<input type='text' onChange={props.onAddInputChanged} />
				<button type='submit' onClick={props.onAddSubmit}>Submit</button>
		</div>
		);
};

module.exports = List;

