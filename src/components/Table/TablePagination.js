import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TablePagination extends React.Component {
  render () {
    return (
      <div className="flex md:inline-flex items-center justify-between md:justify-start">
        <div className={`w-6 md:w-8 h-6 md:h-8 flex mx-1 md:mx-2 items-center justify-center hover:bg-gray-200 rounded-lg cursor-pointer ${this.props.minRow > 0 ? "opacity-100" : "opacity-25"}`} onClick={this.props.loadFistData}>
          <span className="border-r-2 border-gray-900 h-3"></span>
          <FontAwesomeIcon icon="chevron-left" />
        </div>
        <div className={`w-6 md:w-8 h-6 md:h-8 flex mx-1 md:mx-2 hover:bg-gray-200 rounded-lg cursor-pointer ${this.props.minRow > 0 ? "opacity-100" : "opacity-25"}`} onClick={this.props.loadPrevData}>
          <FontAwesomeIcon className="m-auto" icon="chevron-left" />
        </div>
        <div className="hidden md:block mx-2 text-xs md:text-sm">
          <span className="font-bold text-gray-600">{this.props.minRow+1}-{this.props.maxRow < this.props.rowCount ? this.props.maxRow : this.props.rowCount} of {this.props.rowCount}</span>
        </div>
        {this.props.tableFilter &&
          <div className={`md:hidden w-12 h-6 rounded-full flex text-white mx-1 ${this.props.isTableFilterOpen ? "bg-gray-600" : "bg-green-500"}`} onClick={this.props.toggleTableFilter}>
            <FontAwesomeIcon className="m-auto" icon={this.props.isTableFilterOpen ? "chevron-down" : "search"}/>
          </div>
        }
        <div className={`w-6 md:w-8 h-6 md:h-8 flex mx-1 md:mx-2 hover:bg-gray-200 rounded-lg cursor-pointer ${this.props.maxRow < this.props.rowCount ? "opacity-100" : "opacity-25"}`} onClick={this.props.loadNextData}>
          <FontAwesomeIcon className="m-auto" icon="chevron-right" />
        </div>
        <div className={`w-6 md:w-8 h-6 md:h-8 flex mx-1 md:mx-2 items-center justify-center hover:bg-gray-200 rounded-lg cursor-pointer ${this.props.maxRow < this.props.rowCount ? "opacity-100" : "opacity-25"}`} onClick={this.props.loadLastData}>
          <FontAwesomeIcon icon="chevron-right" />
          <span className="border-r-2 border-gray-900 h-3"></span>
        </div>
      </div>
    );
  }
}

export default TablePagination;
