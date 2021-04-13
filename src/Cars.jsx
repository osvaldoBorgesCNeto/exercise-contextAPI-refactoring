// src/Cars.jsx

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import { moveCar } from './redux/actionCreators';
import CarsContext from './myContext';

function Cars({ redCar, blueCar, yellowCar, moveCar }) {
  return (
    <CarsContext.Consumer>
      {({cars, handleChange }) => (
        <div>
          <div>
            <img
              className={cars.red ? 'car-right' : 'car-left'}
              src={carRed}
              alt="red car"
              />
            <button
              onClick={() => handleChange('red', !cars.red)}
              type="button"
              >
              Move
            </button>
          </div>
          <div>
            <img
              className={cars.blue ? 'car-right' : 'car-left'}
              src={carBlue}
              alt="blue car"
              />
            <button
              onClick={() => handleChange('blue', !cars.blue)}
              type="button"
              >
              Move
            </button>
          </div>
          <div>
            <img
              className={cars.yellow ? 'car-right' : 'car-left'}
              src={carYellow}
              alt="yellow car"
              />
            <button
              onClick={() => handleChange('yellow', !cars.yellow)}
              type="button"
              >
              Move
            </button>
          </div>
        </div>
      )}
    </CarsContext.Consumer>
  );
}

Cars.propTypes = {
  moveCar: PropTypes.func.isRequired,
  blueCar: PropTypes.bool.isRequired,
  redCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  redCar: state.cars.red,
  blueCar: state.cars.blue,
  yellowCar: state.cars.yellow});

const mapDispatchToProps = { moveCar };

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
