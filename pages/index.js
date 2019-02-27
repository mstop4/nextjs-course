import React from 'react';
import DigitalClock from "../src/DigitalClock";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    }
  }

  tick = () => {
    this.interval = requestAnimationFrame(this.tick);

    this.setState(() => {
      return ({
        time: new Date().toLocaleString()
      });
    });
  }

  componentDidMount() {
    this.tick();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.interval);
  }

  render() {
    return <DigitalClock time={this.state.time}></DigitalClock>
  }
};

export default Index;