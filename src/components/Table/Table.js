import React from 'react';
import TableFilter from './TableFilter';
import TableHeader from './TableHeader';
import TableDataRow from './TableDataRow';
import TablePagination from './TablePagination';

const style ={
  backdropBlur : {
    backdropFilter: "blur(3px)",
    WebkitBackdropFilter: "blur(3px)",
    background: "rgba(255, 255, 255, 0.95)"
  }
}

class Table extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentMinRow: 0,
      currentMaxRow: this.props.rowLimit,
      resultData: this.props.tableDataRow,
      isTableFilterOpen: false
    };
    this.toggleTableFilter = this.toggleTableFilter.bind(this);
    this.loadNextData = this.loadNextData.bind(this);
    this.loadPrevData = this.loadPrevData.bind(this);
    this.loadFistData = this.loadFistData.bind(this);
    this.loadLastData = this.loadLastData.bind(this);
    this.filteredData = this.filteredData.bind(this);
  }
  toggleTableFilter () {
    this.setState({
      isTableFilterOpen: !this.state.isTableFilterOpen
    })
  }
  loadNextData () {
    if(this.state.currentMaxRow < this.state.resultData.length) {
      this.setState({
        currentMinRow: this.state.currentMaxRow,
        currentMaxRow: this.state.currentMaxRow + this.props.rowLimit 
      })
    }
  }
  loadPrevData () {
    if(this.state.currentMinRow > 0) {
      this.setState({
        currentMaxRow: this.state.currentMinRow,
        currentMinRow: this.state.currentMinRow - this.props.rowLimit
      })
    }
  }
  loadFistData () {
   if(this.state.currentMinRow > 0) {
    this.setState({
      currentMinRow: 0,
      currentMaxRow: this.props.rowLimit
    })
   }
  }
  loadLastData () {
    if(this.state.currentMaxRow < this.state.resultData.length) {
      this.setState({
        currentMinRow: this.state.resultData.length - (this.state.resultData.length % this.props.rowLimit),
        currentMaxRow: this.state.resultData.length
      })
    }
  }
  filteredData(query) {
    this.setState({
      resultData: this.props.tableDataRow.filter(tdr => tdr.reduce((prev, next) => (prev+next).toLowerCase()).includes(query))
    })
  }
  render () {
    return (
      <div className="overflow-auto pb-10 text-sm md:border md:bg-white md:rounded-lg md:shadow-md md:overflow-hidden md:pb-0">
        <div style={style.backdropBlur} className="fixed bottom-0 left-0 p-4 w-full border-t text-center md:flex md:items-center md:p-1 md:justify-between md:static md:w-auto md:border-none z-20">
          {this.props.tableFilter && 
            <div className={`-mt-2 mb-3 md:mb-0 md:mt-0 ${this.state.isTableFilterOpen ? null : "hidden md:block"}`}>
              <TableFilter filteredData={this.filteredData} />
            </div>
          }
          <TablePagination
            tableFilter={ this.props.tableFilter }
            toggleTableFilter = { this.toggleTableFilter }
            isTableFilterOpen = { this.state.isTableFilterOpen }
            loadNextData={ this.loadNextData }
            loadPrevData={ this.loadPrevData }
            loadFistData={ this.loadFistData }
            loadLastData={ this.loadLastData }
            rowCount={ this.state.resultData.length }
            minRow={ this.state.currentMinRow }
            maxRow={ this.state.currentMaxRow }
          />
        </div>
        <div className="block md:table w-full">
          <TableHeader tableHeader={ this.props.tableHeader } tableAction={ this.props.tableAction } />
          {this.state.resultData.slice(this.state.currentMinRow, this.state.currentMaxRow).map((row, index) => (
            <React.Fragment key={ index }>
              <TableDataRow
                tableHeader={ this.props.tableHeader }
                tableDataCol={ row } rowCount={ index+this.state.currentMinRow+1 }
                tableAction={ this.props.tableAction }
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default Table;
