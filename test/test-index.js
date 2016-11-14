var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Card = require('../js/components/card');
var Board = require('../js/components/board');

describe('Card component', function() {
    it('Renders the description',  function() {
        var renderer = TestUtils.createRenderer();
        renderer.render(<Card text="hello" />);
        var result = renderer.getRenderOutput();
        result.props.children.should.be.a('string');
        
    });
});

describe('Board component', function() {
    it('Renders the element type',  function() {
        var renderer = TestUtils.createRenderer();
        renderer.render(<Board />);
        var result = renderer.getRenderOutput();
        result.props.children[0].type.should.equal('h2');
        result.props.children[1].type.displayName.should.equal('ListContainer');
    });
});
