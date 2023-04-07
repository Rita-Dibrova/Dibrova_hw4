import React from 'react'
import LifeCycles from '../LifeCycles/LifeCycles';

class SecondTask extends React.Component {

    state = {
      isVisible: true,
      openModal: false
    }
  
    onClick = () => {
        this.setState({
          openModal: !this.state.openModal
        });
    };

    handleClick = () => {
      this.setState(prev => ({isVisible: !prev.isVisible}));
    }

    componentWillUpdate() {
        if (!this.state.isVisible) {
            alert("close")
        }
        else {alert("open")};        
    }

    render() {
      return (
        <div className='App-header'>
          <button onClick={this.handleClick}>Click</button>
          {!this.state.isVisible && <LifeCycles />}
        </div>
      )
    }
  }

  export default SecondTask;