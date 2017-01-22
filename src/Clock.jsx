import React, {Component} from 'react';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0,
    };
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount () {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  leading0(num) {
    return num < 10?  '0' + num: num;
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const days = Math.floor(time/(1000*60*60*24));
    const hours = Math.floor(time/(1000*60*60) % 24);
    const mins = Math.floor(time/(1000*60) % 60);
    const secs = Math.floor(time/(1000) % 60);
    console.log(days, hours, mins, secs);
    this.setState({days, hours, mins, secs})
  }

  render (){
    return (
      <div>
        <div className="clock-days">{this.leading0(this.state.days)} days</div>
        <div className="clock-hours">{this.leading0(this.state.hours)} hours</div>
        <div className="clock-mins">{this.leading0(this.state.mins)} mins</div>
        <div className="clock-secs">{this.leading0(this.state.secs)} secs</div>
      </div>
    )
  }
}

export default Clock;
