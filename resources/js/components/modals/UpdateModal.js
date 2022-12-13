import axios from 'axios';
import React, {Component} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class UpdateModal extends Component{

    constructor(props){
        super(props);

        this.state = {
            employeeName : null,
            employeeSalary : null
        }
    }

    inputEmployeeName = (event) => {
        this.setState = {
            employeeName : event.target.value,
        }
    }

    inputEmployeeSalary = (event) => {
        this.setState = {
            employeeSalary : event.target.value,
        }
    }

    //update data from props on modal

    static getDerivedStateFromProps(props, current_state) {

        let employeeUpdate = {
            employeeName : null,
            employeeSalary : null,
        }

        //updating data from input
        if(current_state.employeeName && (current_state.employeename !== props.employeeData.currentEmployeeName)){
            return null;
        }

        if(current_state.employeeSalary && (current_state.employeeSalary !== props.employeeData.currentEmployeeSalary)){
            return null;
        }




        //updating data from props

        if (current_state.employeeName !== props.employeeData.currentEmployeeName || current_state.employeeName === props.employeeData.currentEmployeeName ){
            employeeUpdate.employeeName = props.employeeData.currentEmployeeName;
        }

        if (current_state.employeeSalary !== props.employeeData.currentEmployeeSalary || current_state.employeeSalary === props.employeeData.currentEmployeeSalary ){
            employeeUpdate.employeeSalary = props.employeeData.currentEmployeeSalary;
        }

        return employeeUpdate;
    }

    //updating employee data
    updateEmployeeData = () => {
        console.log(this.state.employeeName);
        axios.post('/update/employee/data', {
            employeeId : this.props.modalId,
            employeeName: this.state.employeeName,
            employeeSalary: this.state.employeeSalary,

        }).then(() => {
            toast.success("employee Updated Successfully");
            setTimeout(() => {
                location.reload();
            }, 3000)
        })
    }
  
    render(){
        return ( 
            <div className="modal fade" id= { 'updateModal'+this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Employee Details</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                        <form className='form'>
                            <div className="mb-3">
                                {/* <label for="employeeName" class="form-label">Name</label> */}
                                <input type="text" 
                                    className="form-control" 
                                    id="employeeName" 
                                    value={this.state.employeeName ?? ""}
                                    onChange = { this.inputEmployeeName }
                                />
                            </div>
                            <div className="mb-3">
                                {/* <label for="employeeSalary" class="form-label">Salary</label> */}
                                <input type="text" 
                                    className="form-control" 
                                    id="employeeSalary" 
                                    value={this.state.employeeSalary ?? ''}
                                    onChange = {this.inputEmployeeSalary}
                                    />
                            </div>
                            
                        </form>
                  </div>
                  <div className="modal-footer">
                    <button type="submit" 
                        className="btn btn-info"
                        onClick = { this.updateEmployeeData }
                    >
                        Update
                    </button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            
        );
    }
}


export default UpdateModal;


