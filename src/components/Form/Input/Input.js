import React from 'react';

class Input extends React.Component {
  render () {
    return (
      <React.Fragment>
        {this.props.labelText ? 
          <div className="p-1">
            <label className="text-xs text-gray-700">{this.props.labelText}</label>
            {this.props.required === true &&
              <span className="text-red-500 ml-1">*</span>
            }
          </div>
          :
          null
        }
        <input
          className={`block focus:outline-none h-10 px-4 bg-gray-100 rounded-lg focus:shadow-inner focus:bg-white border border-gray-400 ${this.props.className ? this.props.className : null}`}
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
          name={this.props.name}
          onChange={this.props.onChange}
          onFocus={this.props.onFocus}
          required={this.props.required}
          min={this.props.min}
          max={this.props.max}
          id={this.props.id}
        />
      </React.Fragment>
    );
  }
}

export default Input;
