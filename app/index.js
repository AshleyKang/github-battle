var USER_DATA = {
	name: 'Jihye Kang',
	username: 'AshleyKang',
	image: 'https://avatars2.githubusercontent.com/u/7676152?v=3'
}


var React = require('react')
var ReactDOM = require('react-dom')


var ProfilePic = React.createClass({
	render: function() {
		return (
			<img src={this.props.imageUrl}/>
			)
	}
});

var ProfileLink = React.createClass({
	render: function() {
		return (
			<div>
			<a href={'https://github.com/' + this.props.username}>
			{this.props.username}
			</a>
			</div>
			)
	}
});

var ProfileName = React.createClass({
	render: function() {
		return (
			<div>
			{this.props.name}
			</div>
			)
	}
});


var Avatar = React.createClass({
	render: function(){
		return (
			<div>
			<ProfilePic imageUrl = {this.props.user.image}/>
			<ProfileName name = {this.props.user.name}/>
			<ProfileLink username = {this.props.user.username}/>
			</div>
			)
	}
});
ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));