import React from 'react';
import Topbar from '../components/Topbar/Topbar';
import FormWithSection from '../components/Form/FormWithSection/FormWithSection';
import FormSection from '../components/Form/FormWithSection/FormSection';
import FormControl from '../components/Form/FormControl/FormControl';
import Input from '../components/Form/Input/Input';
import Select from '../components/Form/Input/Select';
import TextArea from '../components/Form/Input/TextArea';
import CheckBox from '../components/Form/Input/Checkbox';
import FormFooter from '../components/Form/FormFooter/FormFooter';
import Button from '../components/Form/Button/Button';

function createInitialName ( optionValue, optionText ) {
  return { optionValue, optionText }
}

//Sample Data for Select Input
const sampleData = [
  createInitialName('1','description 1'),
  createInitialName('2','description 2'),
  createInitialName('3','description 3'),
  createInitialName('4','description 4'),
  createInitialName('5','description 5')
]

class PatientSetup extends React.Component {
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
                  <Select className="w-32" labelText="Patient Name" optionData={sampleData} preViewData="Initial" required={true} />
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
                  <Select labelText="Gender" optionData={sampleData} preViewData="Other"/>
                </FormControl>
                <FormControl>
                  <Select labelText="Marital Status" optionData={sampleData} preViewData="Single"/>
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
            <FormSection sectionTitle="Address Information">
              <FormControl>
                <Input className="w-full" type="text" labelText="Location" />
              </FormControl>
              <FormControl>
                <Input className="w-full" type="email" labelText="Email" />
              </FormControl>
              <FormControl>
                <Input className="w-full" type="text" labelText="Occupation" />
              </FormControl>
            </FormSection>
            <FormSection sectionTitle="Medical Information">
              <FormControl>
                <Select className="w-24" labelText="Blood Type" optionData={sampleData} preViewData="-"/>
              </FormControl>
              <FormControl>
                <TextArea className="w-full" labelText="Allergy"/>
              </FormControl>
            </FormSection>
            <FormSection sectionTitle="Remark">
              <FormControl>
                <TextArea className="w-full" />
              </FormControl>
              <FormControl>
                <CheckBox labelText="Active"/>
              </FormControl>
            </FormSection>
            <FormFooter>
              <Button className="ml-2" type="">Save & Print</Button>
              <Button className="ml-2" type="">Save</Button>
            </FormFooter>
          </FormWithSection>
        </div>
      </React.Fragment>
    );
  }
}

export default PatientSetup;
