import React from 'react';

class FormWithSection extends React.Component {
  render () {
    return (
      <div className="bg-white border rounded-lg shadow-md overflow-hidden">
        <div className="w-full h-2 bg-green-500"></div>
        <form action={this.props.action} onSubmit={this.props.onSubmit} method={this.props.method}>
          {this.props.children}
        </form>
      </div>
    );
  }
}

export default FormWithSection;
