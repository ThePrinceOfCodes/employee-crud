import axios from 'axios';
import React, {Component} from 'react';
import { toast } from 'react-toastify';


class deleteModal extends Component{

    constructor(props){
        super(props);
    }

    deleteEmployeeData = (employee) => {
        axios.delete('/delete/employee/data/' + employee).then(() => {
            toast.error("Employee Deleted");

            setTimeout( () => {
              location.reload();
            }, 3000)
        })
    }
  
    render(){
        return ( 
            <div className="modal fade" id= { 'deleteModal'+this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Employee Details</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p><strong>Are you sure you want to delete this employee data?</strong></p>
                      {/* Name : <strong> {this.props.employeeData.currentEmployeeName}</strong>
                      <hr/>
                      Salary: <strong> {this.props.employeeData.currentEmployeeSalary}</strong> */}
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" 
                        data-bs-dismiss="modal"
                        onClick={() => {this.deleteEmployeeData(this.props.modalId)}}
                    >Yes
                    </button>

                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                  </div>
                </div>
              </div>
            </div>
            
        );
    }
}


export default deleteModal;


