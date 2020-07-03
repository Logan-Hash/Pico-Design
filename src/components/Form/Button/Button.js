import React from 'react';

class Button extends React.Component {
  render () {
    return (
      <button
        className={`px-4 h-10 bg-green-500 text-white rounded-lg text-xs font-bold uppercase hover:bg-green-600 focus:outline-none ${this.props.className ? this.props.className : null}`}
        type={this.props.type}
        name={this.props.name}
        onClick={this.props.onClick}
      >
          {this.props.children}
      </button>
    );
  }
}

export default Button;
