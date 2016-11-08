require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');


var Card = function(props) {
    var style = {
        border: '1px solid black',
        height: '100px',
        lineHeight: '100px',
        width: '300px',
        textAlign: 'center',
        fontSize: '2em'
    };
    return (
        <div onClick={props.onClick} style={style}>
            {props.text}
        </div>
    );
};



module.exports = Card;