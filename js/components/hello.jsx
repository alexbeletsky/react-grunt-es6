import React from 'react';

var HelloWorld = React.createClass({
	render: function () {
		return (
			<h1 onClick={this.props.onClick}>Hello World</h1>
		);
	}
});

export default HelloWorld;
