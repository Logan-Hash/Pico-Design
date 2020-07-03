import React from 'react';

class FormFooter extends React.Component {
  render () {
    return (
      <div className={`p-4 flex items-center justify-end ${this.props.className ? this.props.className : null}`}>
        {this.props.children}
      </div>
    );
  }
}

export default FormFooter;
