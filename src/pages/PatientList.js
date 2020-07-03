import React from 'react';
import Topbar from '../components/Topbar/Topbar';
import Table from '../components/Table/Table';

function createData(patientID, name, father, nrc, age, blood, status) {
  return [ patientID, name, father, nrc, age, blood, status ];
}

const tableHeader = ["Patient ID", "Name", "Father", "NRC No.", "Age", "Blood", "Status"]

function createAction(actionName, actionIcon) {
  return { actionName, actionIcon };
}

const tableDataRows = [
  createData('P-19-000008', 'U Aung Myin Kyaw', 'U Tint Lwin', '12/kakhaga(N)77487', '25', 'O+', 'Active'),
  createData('P-19-000007', 'U Aung Ko Min', 'U Aung Myint Kyaw', '12/kakhaga(N)36354', '30', 'A-', 'Active'),
  createData('P-19-000006', 'U Tayzar Moe Win', 'U Aung Kyaw', '9/kakhaga(N)25666', '32', 'A-', 'Deleted'),
  createData('P-19-000005', 'U Tint Lwin', 'U Tayzar Aung', '7/kakhaga(N)34899', '24', 'O+', 'Active'),
  createData('P-19-000004', 'U Moe Win', 'U Maung Moe', '8/kakhaga(N)33985', '43', 'B+', 'Active'),
  createData('P-19-000003', 'U Tayzar', 'U Maung Tayza', '9/kakhaga(N)95564', '55', 'A+', 'Active'),
  createData('P-19-000002', 'U Kyaw Soe Moe Win', 'U Maung Win Kyaw', '12/kakhaga(N)61113', '65', 'O-', 'Active'),
  createData('P-19-000001', 'U Soe Win', 'U Aung Ko Min', '3/kakhaga(N)67513', '44', 'O+', 'Active'),
  createData('P-18-000009', 'Daw Sein Tint', 'U Tayzar Myint Sein', '12/kakhaga(N)39562', '45', 'A-', 'Active'),
  createData('P-18-000008', 'U Maung Maung Zaw', 'U Aung Zaw', '4/kakhaga(N)63785', '44', 'O-', 'Deleted'),
  createData('P-18-000007', 'U Tint Lwin', 'U Zaw Zaw', '5/kakhaga(N)29548', '32', 'A-', 'Active'),
  createData('P-18-000006', 'U Myint Myat Bone Aung', 'U Maung Bone Zaw', '12/kakhaga(N)23375', '36', 'A+', 'Active'),
  createData('P-18-000005', 'Mr. James Tommy', 'Mr. Joe Smith', '12/kakhaga(N)40076', '38', 'A+', 'Active'),
  createData('P-18-000004', 'U Aung Ko Min', 'U Aung Soe', '9/kakhaga(N)10004', '30', 'O-', 'Deleted'),
  createData('P-18-000003', 'Mrs. Yoon Se Yi', 'Mr. Yi Joung Min', '5/kakhaga(N)47772', '31', 'A-', 'Deleted'),
  createData('P-18-000002', 'Daw Ni Ni Aung', 'U Aung Ko Ni', '8/kakhaga(N)97783', '28', 'O+', 'Active'),
  createData('P-18-000001', 'Daw Win Min Myint', 'U Tint Lwin Soe', '6/kakhaga(N)22754', '29', 'B+', 'Deleted'),
  createData('P-17-000006', 'Daw Hla Myat Yi', 'U Maung Myat', '11/kakhaga(N)55604', '33', 'O+', 'Active'),
  createData('P-17-000005', 'U Soe Myint Lwin', 'U Aung soe Myint', '8/kakhaga(N)09437', '55', 'O-', 'Active'),
  createData('P-17-000004', 'U Thiha Kyaw', 'U Maung Maung', '12/kakhaga(N)33361', '47', 'B+', 'Active'),
  createData('P-17-000003', 'U Aung Myin Kyaw', 'U Tint Lwin Oo', '12/kakhaga(N)98735', '42', 'O+', 'Active'),
  createData('P-17-000002', 'U Arkar Myat Min', 'U Aung Kyaw', '10/kakhaga(N)51674', '46', 'O-', 'Deleted'),
  createData('P-17-000001', 'U Tayzar Kyaw Soe Moe Win', 'U Tayza', '12/kakhaga(N)136576', '35', 'A-', 'Active')
]

const tableAction = [
  createAction('Detail', 'eye'),
  createAction('Update', 'pencil-alt'),
  createAction('Delete', 'trash')
]

class PatientList extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Topbar toggleSidebar={this.props.toggleSidebar} pageTitle="Patient List"/>
        <div className="my-4 px-4 lg:px-0">
          <Table
            tableHeader={ tableHeader }
            tableDataRow={ tableDataRows }
            tableAction={ tableAction }
            rowLimit={ 10 }
            tableFilter={ true }
          />
        </div>
      </React.Fragment>
    );
  }
}

export default PatientList;
