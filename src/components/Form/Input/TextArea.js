import React from 'react';

class TextArea extends React.Component {
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
        <textarea
          className={`block resize-none focus:outline-none h-32 p-4 bg-gray-100 rounded-lg focus:shadow-inner focus:bg-white border border-gray-400 ${this.props.className ? this.props.className : null}`}
          name={this.props.name}
          id={this.props.id}
          cols={this.props.cols}
          rows={this.props.row}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
          onFocus={this.props.onFocus}
          required={this.props.required}
        ></textarea>
      </React.Fragment>
    );
  }
}

export default TextArea;
