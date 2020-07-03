import React from 'react';
import Topbar from '../components/Topbar/Topbar';
import FormWithSection from '../components/Form/FormWithSection/FormWithSection';
import FormSection from '../components/Form/FormWithSection/FormSection';
import FormControl from '../components/Form/FormControl/FormControl';
import Input from '../components/Form/Input/Input';
import Select from '../components/Form/Input/Select';
import FormFooter from '../components/Form/FormFooter/FormFooter';
import Button from '../components/Form/Button/Button';
import DataList from '../components/Form/Input/DataList';

function createSelectData ( optionValue, optionText ) {
  return { optionValue, optionText }
}

//Sample Data for Select Input
const selectSampleData = [
  createSelectData('1','description 1'),
  createSelectData('2','description 2'),
  createSelectData('3','description 3'),
  createSelectData('4','description 4'),
  createSelectData('5','description 5')
]

//Sample Data for Datalist Input
const dataListSampleData = [ 'Dr. Shwe Yi', 'Dr. Mya Theingi', 'Dr. Park Soon Ri', 'Dr. William Smith', 'Dr. Hsu Wai Khet Khaing', 'Dr. Min Min Soe', 'Dr. Khin Hinn Wai', 'Dr. Aung Ko Khant']

class VisitRegSetup extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Topbar toggleSidebar={this.props.toggleSidebar} pageTitle="Patient Setup"/>
        <div className="my-4 px-4 lg:px-0 w-full lg:w-4/5 xl:w-2/3 m-auto">
          <FormWithSection action="">
            <FormSection sectionTitle="Personal Information">
              <FormControl className="flex-grow md:flex-grow-0">
                <Input className="w-full md:w-auto" type="text" labelText="Patient ID" />
              </FormControl>
              <div className="flex flex-wrap items-end">
                <FormControl>
                  <Select className="w-32" labelText="Patient Name" optionData={selectSampleData} preViewData="Initial" required={true} />
                </FormControl>
                <FormControl className="flex-grow">
                  <Input className="w-full" type="text" required={true} />
                </FormControl>
              </div>
              <FormControl className="flex-grow md:flex-grow-0">
                <Input className="w-full" type="text" labelText="Father Name" required={true} />
              </FormControl>
              <div className="flex flex-wrap items-end">
                <FormControl>
                  <Select labelText="Gender" optionData={selectSampleData} preViewData="Other"/>
                </FormControl>
                <FormControl>
                  <Select labelText="Marital Status" optionData={selectSampleData} preViewData="Single"/>
                </FormControl>
              </div>
              <div className="flex flex-wrap items-end">
                <FormControl className="inline-block">
                  <Input className="w-24" type="number" labelText="Age"/>
                </FormControl>
                <FormControl className="inline-block">
                  <Input type="text" labelText="Date of Birth" placeholder="DD/MM/YYYY" />
                </FormControl>
              </div>
              <FormControl>
                <Input className="w-full" type="text" labelText="Place of Birth" />
              </FormControl>
            </FormSection>
            <FormSection sectionTitle="Dotor Information">
              <FormControl>
                <DataList labelText="Doctors" placeholder="Select Doctors" dataList={dataListSampleData}/>
              </FormControl>
            </FormSection>
            <FormFooter>
              <Button className="ml-2" type="">Save</Button>
            </FormFooter>
          </FormWithSection>
        </div>
      </React.Fragment>
    );
  }
}

export default VisitRegSetup;
