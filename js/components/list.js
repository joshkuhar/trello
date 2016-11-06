var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');



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

var List = function(props){
	return(
		<div>
			{props.title}
			<Card text={props.content}/>
		</div>
		);
};
module.exports = List;


