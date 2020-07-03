import React from 'react';
import TableAction from './TableAction';

class TableDataRow extends React.Component {
  render () {
    return (
      <div className={`block p-4 mb-4 border bg-white rounded-lg shadow md:p-0 md:mb-0 md:bg-transparent md:rounded-none md:shadow-none md:border-none md:table-row ${ this.props.rowCount % 2 === 0 ? "md:bg-gray-100" : "" }`}>
        <div className="hidden lg:table-cell md:px-2 md:py-3 lg:p-3 md:border-t">{this.props.rowCount}</div>
        {this.props.tableDataCol.map((td, index) => (
          <React.Fragment key={ index }>
            { index <= 3 && 
              <div className="block md:table-cell text-xs mb-1 md:text-sm md:px-2 md:py-3 lg:p-3 md:border-t">
                <span className="font-bold mr-3 text-gray-700 md:hidden">{this.props.tableHeader[index]}:</span>{td}
              </div>
            }
            { index > 3 && 
              <div className="block md:hidden lg:table-cell text-xs mb-1 md:text-sm md:px-2 md:py-3 lg:p-3 md:border-t">
                <span className="font-bold mr-3 text-gray-700 md:hidden">{this.props.tableHeader[index]}:</span>{td}
              </div>
            }
          </React.Fragment>
        ))}
        { this.props.tableAction && 
          <div className="block md:table-cell md:px-2 md:py-3 lg:p-3 text-right md:text-center md:border-t">
            <TableAction actionData={ this.props.tableAction } />
          </div>
        }
      </div>
    );
  }
}

export default TableDataRow;
