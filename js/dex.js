

require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./bottom');

var FlashCard = React.createClass({
    getInitialState: function() {
        return {
            english: 'Grapefruit',
            french: 'Pamplemousse',
            selected: 'english'
        }
    },

    onCardClick: function() {
        if (this.state.selected == 'english') {
            this.setState({
                selected: 'french'
            });
        }
        else {
            if (this.state.selected == 'french') {
                this.setState({
                    selected: 'english'
                });
            }
        }
    },
    render: function() {
        return <Card text={this.state[this.state.selected]}
                     onClick={this.onCardClick} />;
    }
});

document.addEventListener('DOMContentLoaded', function(){
	ReactDOM.render(<FlashCard/>, document.getElementById('app'));
});	