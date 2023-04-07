import React from 'react';

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        countChange: false
      }
    }

    componentDidUpdate(prevProps, prevState){
      if (this.state.count !== prevState.count) {
        this.setState({countChange: true})
        // console.log("componentDidUpdate");
      }
    }

    componentWillUnmount() {
      clearInterval(this.count);
    }
 
    tick = () => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    render() {
      return (
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.tick}>Press</button>
        </div>
      );
    }
  }
  
export default Counter;