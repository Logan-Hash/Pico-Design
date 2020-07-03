import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Select extends React.Component {
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
        <div className={`inline-block relative ${this.props.className ? this.props.className : null}`}>
          <select
            className="block appearance-none w-full focus:outline-none h-10 pl-4 pr-10 bg-gray-100 rounded-lg focus:shadow-inner focus:bg-white border border-gray-400"
            name={this.props.name}
            id={this.props.id}
            onChange={this.props.onChange}
            onFocus={this.props.onFocus}
          >
            <option value="">{this.props.preViewData}</option>
              {this.props.optionData.map((opt, index) => (
                <React.Fragment key={index}>
                  <option value={opt.optionValue}> {opt.optionText} </option>
                </React.Fragment>
              ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-xs">
            <FontAwesomeIcon icon="chevron-down" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Select;
