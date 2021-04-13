import React from 'react';
import './App.css';
import Cars from './Cars';
import CarsContext from './myContext';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
  }

  handleChange(name, value) {
    this.setState((prevState) => ({
      cars: { ...prevState.cars, [name]: value }
    }))
  }

  render() {
    const contextValue = {
      cars: this.state.cars,
      handleChange: this.handleChange      
    }

    return (
      <CarsContext.Provider value={contextValue}>
        <Cars />
      </CarsContext.Provider>
    );
  }
}

export default App;
