import axios from 'axios';
import React, {Component} from 'react';
import ViewModal from '../modals/ViewModal';
import UpdateModal from '../modals/UpdateModal';

class TableActionButtons extends Component{

    constructor(props){
        super(props);

        this.state = {
            currentEmployeeName : null,
            currentEmployeeSalary : null
        }
    }

    //get single Employee details
    getEmployeeDetails = (id) => {
        let self = this;
        axios.post('/get/individual/employee/details', { employeeId : id }).then( (response) => {
            self.setState({
                currentEmployeeName : response.data.employee_name,
                currentEmployeeSalary : response.data.salary
            })});
    }
  
    render(){
        return ( 
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" 
                    className="btn btn-outline-primary" 
                    data-bs-toggle="modal" 
                    data-bs-target={ '#viewModal'+this.props.rowId}
                    onClick = { () => { this.getEmployeeDetails(this.props.rowId) }}
                >
                    View
                </button>
                <ViewModal modalId = { this.props.rowId } employeeData = { this.state}/>

                <button type="button"
                     className="btn btn-outline-info"
                     data-bs-toggle="modal" 
                     data-bs-target={ '#updateModal'+this.props.rowId}
                     onClick = { () => { this.getEmployeeDetails(this.props.rowId) }}
                >
                    Update
                </button>

                <UpdateModal modalId = { this.props.rowId } employeeData = { this.state}/>



                <button type="button" className="btn btn-outline-danger">Delete</button>
            </div>    
        );
    }
}


export default TableActionButtons;


