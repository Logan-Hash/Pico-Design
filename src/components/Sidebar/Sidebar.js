import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ExpensionMenu from './ExpensionMenu';
import NonExpensionMenu from './NonExpensionMenu';

const style ={
  backdropBlur : {
    backdropFilter: "blur(3px)",
    WebkitBackdropFilter: "blur(3px)",
    background: "rgba(255, 255, 255, 0.925)"
  }
}

class Sidebar extends React.Component {
  constructor (props) {
    super(props)
    this.state = { sidebarState: true }
    this.smallSidebar = this.smallSidebar.bind(this);
  }
  smallSidebar () {
    this.setState({
      sidebarState: !this.state.sidebarState
    })
  }
  render () {
    return (
      <div className={`transition-all duration-75 flex-none relative ${ this.state.sidebarState ? "xl:w-64" : "xl:w-16" }`}>
        <div className={`fixed flex top-0 w-screen h-screen z-30 xl:block xl:sticky xl:w-full xl:h-auto xl:z-0 transform xl:translate-x-0 transition-all duration-150 xl:transition-none xl:duration-0 ${ this.props.sidebarState ? "left-0" : "-translate-x-full"}`}>
          <div style={style.backdropBlur} className="overflow-x-hidden overflow-y-auto mx-w-full w-64 xl:w-auto h-screen xl:shadow-md border-r flex-none flex-grow">
            <div className="p-4 h-20 border-b flex items-center justify-between">
              <div className={`flex items-center flex-none ${ this.state.sidebarState ? "" : "hidden" }`}>
                <img src="https://images-na.ssl-images-amazon.com/images/I/51hKyr0it6L.png" alt="" className="object-center w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-gray-200 mr-2 md:mr-4"/>
                <h1 className="text-lg md:text-xl font-bold">picoHOS</h1>
              </div>
              <div className="hidden w-8 h-8 bg-gray-200 text-gray-600 rounded-full xl:flex flex-none hover:text-gray-800 transition-color duration-150 cursor-pointer" onClick={this.smallSidebar}>
                <FontAwesomeIcon icon={ this.state.sidebarState ? "arrow-left" : "arrow-right" } className="m-auto" />
              </div>
              <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex xl:hidden hover:text-gray-800 transition-color duration-150 cursor-pointer" onClick={ this.props.toggleSidebar}>
                <FontAwesomeIcon icon="arrow-left" className="m-auto" />
              </div>
            </div>
            {this.props.menuItems.map((key, index) => (
              <React.Fragment key={index}>
                { key.routeTo === null &&
                  <ExpensionMenu data={key} sidebarState={this.state.sidebarState}/>
                }
                { key.routeTo !== null && 
                  <NonExpensionMenu data={key} sidebarState={this.state.sidebarState}/>
                }
              </React.Fragment>
            ))}
          </div>
          <div className={`w-full h-screen bg-gray-900 xl:hidden ${ this.props.sidebarState ? "opacity-25 transition-all duration-1000" : "opacity-0" }`} onClick={ this.props.toggleSidebar }></div>
        </div>
      </div>
    )
  }
}

export default Sidebar