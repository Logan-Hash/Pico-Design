import React from 'react';

class FormSection extends React.Component {
  render () {
    return (
      <div className="flex flex-wrap py-4 border-b">
        <div className="px-2 md:px-4 w-full md:w-1/3">
          <h4 className="px-1 py-2 md:p-0 md:mt-2">
            {this.props.sectionTitle}
          </h4>
        </div>
        <div className="px-2 md:px-4 w-full md:w-2/3">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default FormSection;
