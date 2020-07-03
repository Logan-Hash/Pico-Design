import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PatientList from '../pages/PatientList';
import Sidebar from '../components/Sidebar/Sidebar';
import PatientSetup from '../pages/PatientSetup';
import VisitRegList from '../pages/VisitRegList';
import VisitRegSetup from '../pages/VisitRegSetup';

function createMenuItem (itemName, menuIcon, routeTo, subItems) {
  return { itemName, menuIcon, routeTo, subItems }
}
function createSubMenuItem (subItemName, subMenuIcon, subRouteTo) {
  return { subItemName, subMenuIcon, subRouteTo }
}
const menuItems = [
  createMenuItem(
    "Patient",
    "users",
    null,
    [
      createSubMenuItem("Patient List", "list", "/"),
      createSubMenuItem("Patient Setup", "plus", "/patientSetup")
    ]
  ),
  createMenuItem(
    "Visit Reg.",
    "clipboard-list",
    null,
    [
      createSubMenuItem("Visit Reg. List", "list", "/visitRegList"),
      createSubMenuItem("Visit Reg. Setup", "plus", "/visitRegSetup")
    ]
  ),
  createMenuItem("Sample Menu", "circle", "/sampleLink")
]

class DashboardLayout extends React.Component {
  constructor (props) {
    super(props);
    this.state = { sidebarState: false };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }
  toggleSidebar () {
    this.setState({
      sidebarState: !this.state.sidebarState
    })
  }
  render () {
    return (
      <div className="xl:flex min-h-screen bg-gray-300 text-gray-900">
        <Sidebar sidebarState= { this.state.sidebarState } toggleSidebar={this.toggleSidebar} menuItems = { menuItems }/>
        <div className="flex-grow lg:p-4">
          <Switch>
            <Route exact path="/">
              <PatientList toggleSidebar={ this.toggleSidebar } />
            </Route>
            <Route exact path="/patientSetup">
              <PatientSetup toggleSidebar={ this.toggleSidebar } />
            </Route>
            <Route exact path="/visitRegList">
              <VisitRegList toggleSidebar={ this.toggleSidebar } />
            </Route>
            <Route exact path="/visitRegSetup">
              <VisitRegSetup toggleSidebar={ this.toggleSidebar } />
            </Route>
          </Switch>
        </div>
      </div>
    )
  }
}

export default DashboardLayout
