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
			this.setState({ text: event.target.value })
			);
	},
	onAddSubmit () {
		return (
			this.setState({ cards: this.state.text })
			);
	},
	render () {
		return <List cards={this.state.cards} onAddInputChanged={this.onAddInputChanged} onAddSubmit={this.onAddSubmit} />
	}

});

module.exports = ListContainer;