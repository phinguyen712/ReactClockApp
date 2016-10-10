var React = require('react');
var Clock = require('Clock');
var CountDownForm = require('CountDownForm');
var CountDown = React.createClass({
  getInitialState:  function(){
    return{count:0};
  },
  handleSetCountdown: function(){
    this.setState({
      count:seconds
    });
  },
  render: function () {
    var{count} = this.props
    return (
        <div>
        <Clock totalSeconds={count}/>
        <CountDownForm onSetCountdown={this.handleSetCountdown}/>
        </div>
    );
  }
});


module.exports = CountDown;
