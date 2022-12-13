import axios from 'axios';
import React, {Component} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class CreateModal extends Component{

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

    //creating employee data
    createNewEmployee = () => {
        axios.post('/create/employee/data', {
            employeeName: this.state.employeeName,
            employeeSalary: this.state.employeeSalary,

        }).then(() => {
            toast.success("employee Created Successfully");
            setTimeout(() => {
                location.reload();
            }, 3000)
        })
    }
  
    render(){
        return ( 
            <>
            <div className='row text-right mb-3 pb-3'>
                <button className='btn btn-info text-right col-3 offset-md-9'
                    data-toggle = "modal"
                    data-target = "#createModal"
                >
                    Add New Employee
                </button>
            </div>
            <div className="modal fade" id= 'createModal' tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Input Employee Details</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <form className='form'>
                            <div className="mb-3">
                                <label for="employeeName" class="form-label">Name</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="employeeName" 
                                    onChange = { () => this.inputEmployeeName }
                                />
                            </div>
                            <div className="mb-3">
                                <label for="employeeSalary" class="form-label">Salary</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="employeeSalary" 
                                    onChange = {this.inputEmployeeSalary}
                                    />
                            </div>
                            
                        </form>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-success" 
                            onClick={ this.createNewEmployee }>
                                Create
                    </button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            </>
        );
    }
}


export default CreateModal;


