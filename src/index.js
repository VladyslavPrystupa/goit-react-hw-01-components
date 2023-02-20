// import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './GlobalStyles.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((state, props) => ({
      value: state.value + props.step,
    }));
  };

  handleDecrement = () => {
    this.setState((state, props) => ({
      value: state.value - props.step,
    }));
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>{this.state.value}</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Counter initialValue={10} step={5} />
);

// class Toggle extends Component {
//   state = { isOpen: false };

//   show = () => {
//     this.setState(state => ({
//       isOpen: !state.isOpen,
//     }));
//     console.log(this.state);
//   };

//   // hide = () => {
//   //   this.setState({ isOpen: false });
//   //   console.log(this.state);
//   // };

//   render() {
//     const { isOpen } = this.state;

//     return (
//       <>
//         <button onClick={this.show}>{isOpen ? 'hide' : 'show'}</button>
//       </>
//     );
//   }
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<Toggle />);
