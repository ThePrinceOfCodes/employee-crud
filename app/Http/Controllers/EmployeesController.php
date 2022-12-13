<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
Use Exception;

class EmployeesController extends Controller
{
    //
    public function index()
    {
        try{

            $employees = Employee::orderBy('id', 'DESC')->get();
            return response()->json($employees);

        }catch(Exception $e){
            Log::error($e);
        }
    }

    //get individual employee details
    public function getEmployeeDetails(Request $request)
    {
        try{

            $employeeData= Employee::findOrFail($request->get('employeeId'));
            return response()->json($employeeData);

        }catch(Exception $e){
            Log::error($e);
        }
    }

    //update employee data
    public function updateEmployeeDetails(Request $request)
    {
        try{
            
            $employeeData= Employee::findOrFail($request->get('employeeId'));
            $employeeData->employee_name = $request->get('employeeName');
            $employeeData->salary = $request->get('employeeSalary');
            $employeeData->update();

            return response()->json(200);

        }catch(Exception $e){
            Log::error($e);
        }
    }

    //delete employeee details
    public function deleteEmployeeDetails(Employee $employee){
        try{
            
           $employee->delete();

            return response()->json(200);

        }catch(Exception $e){
            Log::error($e);
        }
    }
}
