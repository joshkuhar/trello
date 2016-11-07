var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');

var List = function(props) {
	return (
		<div>
			{props.title}
			<Card text={props.content}/>
			<input type='text' onChange={props.onAddInputChanged} />
			<button type='submit' onClick={props.onAddSubmit}>Submit</button>
		</div>
		);
};

module.exports = List;


// console.log('I was clicked')