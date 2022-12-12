import axios from 'axios';
import React, {Component} from 'react';


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

    //updating employee data
    updateEmployeeData = () => {
        console.log(this.state.employeeName);
        axios.post('/update/employee/data', {
            employyeId : this.props.modalId,
            employeeName: this.state.employeeName,
            employeeSalary: this.state.employeeSalary,

        }).then(() => {
             location.reload();
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
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input type="text" 
                                    class="form-control" 
                                    id="employeeName" 
                                    aria-describedby="emailHelp" 
                                    value={this.props.employeeData.currentEmployeeName ?? ''}
                                    // placeholder={this.props.employeeData.currentEmployeeName ?? ''}
                                    onChange = {this.inputEmployeeName}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Salary</label>
                                <input type="text" 
                                    class="form-control" 
                                    id="employeeSalary" 
                                    value={this.props.employeeData.currentEmployeeSalary ?? ''}
                                    // placeholder={this.props.employeeData.currentEmployeeSalary ?? ''}
                                    onChange = {this.inputEmployeeSalary}
                                    />
                            </div>
                            
                        </form>
                  </div>
                  <div className="modal-footer">
                    <button type="submit" 
                        className="btn btn-info"
                        onClick = { this.updateEmployeeData}
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


