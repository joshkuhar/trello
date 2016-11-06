var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');

// TO ITERATE AND USE PROPS FOR STRING CONCAT
// function Card(props){

// 	var list = [];
// 	for (var i = 0; i < 3; i++){
// 		list.push(<div>{props.text + " " + i}</div>);
// 	}

// 	return(
// 		<div>{list}</div>
// 		)
// };

var List = function(props){
	return(
		<div>
			{props.title}
			<Card text={props.content}/>
			<Card text={props.content}/>
			<Card text={props.content}/>
		</div>
		);
};
module.exports = List;


