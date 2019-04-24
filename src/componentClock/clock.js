import React from "react";

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }

  render() {
    const hour = this.state.date.getHours();
    const minute = this.state.date.getMinutes();
    const second = this.state.date.getSeconds();
    return <span>{this.state.hour}</span>;
  }
}

export default Clock;
