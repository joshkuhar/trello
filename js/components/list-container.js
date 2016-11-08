var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list');

var ListContainer = React.createClass({
	getInitialState () {
		return {
			text: '',
			cards: []
		}
	},
	onAddInputChanged (event) {
		return (
			this.setState({ text: event.target.value }),
			console.log(this.state.text)
			);
	},
	onAddSubmit () {
		return (
			console.log("I was clicked")
			);
	},
	render () {
		return <List cards={this.state.cards} onAddInputChanged={this.onAddInputChanged} onAddSubmit={this.onAddSubmit}/>;
		}


});

module.exports = ListContainer;