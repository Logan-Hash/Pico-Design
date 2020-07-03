import React from 'react';
import Input from '../Form/Input/Input';

class TableFilter extends React.Component {
  constructor (props) {
    super(props);
    this.handleOnInputChange = this.handleOnInputChange.bind(this);
  }
  handleOnInputChange (e) {
    const query = e.target.value;
    this.props.filteredData(query.toLowerCase());
  }
  render () {
    return (
      <React.Fragment>
        <form action="" className="flex flex-wrap items-center">
          <Input
            className="w-full md:w-64 m-2"
            type="text"
            placeholder="Search..."
            onChange={this.handleOnInputChange}
          />
        </form>
      </React.Fragment>
    );
  }
}

export default TableFilter;
