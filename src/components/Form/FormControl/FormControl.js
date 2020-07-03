import React from 'react';

class FormControl extends React.Component {
  render () {
    return (
      <div className={`p-1 py-2 ${this.props.className ? this.props.className : null}`}>
        {this.props.children}
      </div>
    );
  }
}

export default FormControl;
