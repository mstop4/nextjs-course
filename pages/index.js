import React from 'react';
import DigitalClock from "../src/DigitalClock";

class Index extends React.Component {

  static async getInitialProps() {
    return ({
      time: new Date().toISOString()
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      time: props.time
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
    return <DigitalClock time={this.state.time}/>
  }
};

export default Index;