import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.carsMove = this.carsMove.bind(this);
    this.changeSignal = this.changeSignal.bind(this);

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: { color: 'red' },
    }
  }

  carsMove(name, value) {
    this.setState((prevState) => ({
      cars: {...prevState.cars, [name]: value}
    }))
  }

  changeSignal(value) {
    this.setState({
      signal: { color: value }
    })
  }

  render() {
    const contextValue = {
      cars: this.state.cars,
      signal: this.state.signal.color,
      carsMove: this.carsMove,
      changeSignal: this.changeSignal,
    }

    return (
      <MyContext.Provider value={ contextValue }>
      <div className="container">
        <Cars />
        <TrafficSignal />
      </div>
    </MyContext.Provider>
    );
  }
}

export default App;
