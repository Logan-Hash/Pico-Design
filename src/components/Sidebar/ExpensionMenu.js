import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

class ExpensionMenu extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = { detailsMarkerState: true };
    this.changeDetailsMarkerState = this.changeDetailsMarkerState.bind(this);
  }
  changeDetailsMarkerState() {
    this.setState({
      detailsMarkerState: this.myRef.current.open
    })
  }
  render () {
    return (
      <details className="text-sm font-bold" ref={this.myRef}>
        <summary className="outline-none relative w-full h-12 invisible" onClick={this.changeDetailsMarkerState}>
          <div className="flex items-center px-2 h-12 cursor-pointer absolute top-0 left-0 w-full visible xl:hover:bg-green-100 xl:hover:text-green-600">
            <div className="w-12 text-center flex-none">
              <FontAwesomeIcon icon={this.props.data.menuIcon} />
            </div>
            <span className={`flex-none flex-grow ${this.props.sidebarState ? "" : "hidden"}`}>{this.props.data.itemName}</span>
            <div className={`flex-none w-5 text-center ${this.props.sidebarState ? "" : "hidden"}`}>
              <FontAwesomeIcon className="text-xs collapsed" icon={`${this.state.detailsMarkerState ? "chevron-down" : "chevron-up"}`} />
            </div>
          </div>
        </summary>
        <div className="px-2 text-xs text-gray-600 border-b pb-3">
          {this.props.data.subItems.map((k, index) => (
            <React.Fragment key={index}>
              <NavLink to={k.subRouteTo}>
                <div className={`flex items-center cursor-pointer hover:text-gray-800 h-12 ${ this.props.sidebarState ? "ml-2" : "" }`}>
                  <div className="w-12 text-center flex-none">
                    <FontAwesomeIcon icon={k.subMenuIcon} />
                  </div>
                  <span className={`flex-none flex-grow ${this.props.sidebarState ? "" : "hidden"}`}>{k.subItemName}</span>
                </div>
              </NavLink>
            </React.Fragment>
          ))}
        </div>
      </details>
    )
  }
}

export default ExpensionMenu