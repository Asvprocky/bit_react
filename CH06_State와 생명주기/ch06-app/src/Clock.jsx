import React, { Component } from 'react'

export default class Clock extends Component {
  //constructor 생성자
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }


  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick()

    }, 1000);
  }

  componentWillUnmount() {

    clearInterval(this.timerId);

  }
  tick() {
    this.setState({
      date: new Date()
    });

  }



  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <h2>It is{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}