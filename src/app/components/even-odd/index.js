import React from 'react';
import { compose, withState, withHandlers } from 'recompose';

const withRandomValue = compose(
  withState('value', 'setValue', 0),
  withHandlers({
    handleClick: ({ setValue }) => e => {
      setValue(Math.floor(Math.random() * Math.floor(10)));
    },
  }),
);

class WithRandomValue extends React.Component {
  state = {
    value: 0,
  };

  handleClick = () => {
    this.setState({
      value: Math.floor(Math.random() * Math.floor(10)),
    });
  };

  render() {
    return this.props.children({
      handleClick: this.handleClick,
      value: this.state.value,
    });
  }
}

const EvenOdd = ({ value, handleClick }) => (
  <div className='even-odd'>
    { value%2 === 0 &&
      <span>{value} - Even</span>
    }
    { value%2 !== 0 &&
      <span>{value} - Odd</span>
    }
    <button onClick={handleClick}>Get Random</button>
  </div>
);

// export default withRandomValue(EvenOdd);

export default () => (
  <WithRandomValue>
    {({ value, handleClick }) => <EvenOdd value={value} handleClick={handleClick} />}
  </WithRandomValue>
)
