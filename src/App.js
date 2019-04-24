import React from "react";

import "./App.css";
import Navigation from "./componentNavbar/navigation";
import Body from "./componentBody/body";
import Form from "./componentForm/form";
import Clock from "./componentClock/clock";
class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Body />
        <Form />
        <Clock />
      </div>
    );
  }
}

export default App;
