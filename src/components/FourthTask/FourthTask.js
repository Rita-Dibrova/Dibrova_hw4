import React from 'react';

class CounterChange extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        countChange: false
      }
    }

    shouldComponentUpdate(){
        return this.state.count < 3 
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
  
export default CounterChange;