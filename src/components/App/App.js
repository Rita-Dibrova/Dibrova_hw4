import React from 'react'
import './App.css';
import SecondTask from '../SecondTask/SecondTask';
import Counter from '../ThirdTask/ThirdTask';
import CounterChange from '../FourthTask/FourthTask';

class App extends React.Component {
  render() {
    return (
      <div className='App-header'>
        <SecondTask/>
        <Counter/>
        <CounterChange/>
      </div>
    )
  }
}
export default App;