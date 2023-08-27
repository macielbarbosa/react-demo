import React from "react";

export class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: new Date(),
    };
  }

  componentDidMount() {
    const that = this;
    setInterval(function () {
      that.setState({ data: new Date() });
    }, 1000);
  }

  render() {
    return <div className="data">{this.state.data.toLocaleString()}</div>;
  }
}
