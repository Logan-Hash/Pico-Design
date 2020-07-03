import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

class NonExpensionMenu extends React.Component {
  render () {
    return (
      <NavLink to={this.props.data.routeTo}>
        <div className="flex items-center px-2 h-12 cursor-pointer text-sm font-bold xl:hover:bg-green-100 xl:hover:text-green-600">
          <div className="w-12 text-center flex-none">
            <FontAwesomeIcon icon={this.props.data.menuIcon} />
          </div>
          <span className={`flex-none flex-grow ${this.props.sidebarState ? "" : "hidden"}`}>{this.props.data.itemName}</span>
        </div>
      </NavLink>
    )
  }
}

export default NonExpensionMenu