import React from 'react';

class LifeCycles extends React.Component {

  state = {
    greetings: null
  }

  render() {
    if(!this.state.greetings) {
      return <h1>Hello World</h1>
    }
  }
}

export default LifeCycles;