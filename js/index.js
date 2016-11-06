require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./components/board');

// var List = function(){
// 	var list = [];
// 	for (var x = 0; x < 2; x++) {
// 		list.push(<Card text="I'm the text" />);
// 	}
// 	return(
// 		<div>
// 			{list}
// 		</div>
// 		);	
// };


document.addEventListener('DOMContentLoaded', function(){
	ReactDOM.render(<Board title='Board Name' lists='List Name'/>, document.getElementById('app'));
});	