import React, { Component } from 'react';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
          <div className='App-title'>Countdown to feb 10th, 2017</div>
          <div>
            <div className="clock-days">18 days</div>
            <div className="clock-hours">30 hours</div>
            <div className="clock-mins">15 mins</div>
            <div className="clock-secs">20 secs</div>
          </div>
          <div>
            <input placeholder="new date"/>
            <button type='submit'>submit</button>
          </div>
      </div>
    )
  }
}

export default App;
