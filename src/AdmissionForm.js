import React, { Component } from 'react';
import PropTypes from 'prop-types';



class AdmissionForm extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: '',
        gender: '',
        age: '',
        programs: '',
        shift: '',
        qualification: '',
        percentage: ''
      };
    }
  
    componentWillMount() {
      const { steps } = this.props;
      const { name, gender, age, programs, shift, qualification, percentage } = steps;
  
      this.setState({ name, gender, age, programs, shift, qualification, percentage });
    }
  
    render() {
      const { name, gender, age, programs, shift, qualification, percentage } = this.state;
      return (
        <div style={{ width: '100%' }}>
          <h3>Summary</h3>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{name.value}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{gender.value}</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>{age.value}</td>
              </tr>
              <tr>
                <td>Programs</td>
                <td>{programs.value}</td>
              </tr>
              <tr>
                <td>Shift</td>
                <td>{shift.value}</td>
              </tr>
              <tr>
                <td>Qualification</td>
                <td>{qualification.value}</td>
              </tr>
              <tr>
                <td>Percentage</td>
                <td>{percentage.value}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  AdmissionForm.propTypes = {
    steps: PropTypes.object,
  };
  
  AdmissionForm.defaultProps = {
    steps: undefined,
  };


  export default AdmissionForm;