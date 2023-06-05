import React,{useState} from "react"
import {Button} from "react-bootstrap"
import Modal from "./Modal/Modal";

export default function List({employees, handleEdit, handleDelete}){
    const [show,setShow] = useState(false)
    const [empDeets,setEmpDeets] = useState()

    const showEmployeeDetails = (employeeIndex) => {
        const employee = employees[employeeIndex]
        setEmpDeets(employee)
        setShow(true)
        
    }

    
    return (
        
        <div className="contain-table">
        <Modal passingdata = {empDeets} onClose={()=>setShow(false)} show={show} />
            <table className="striped-table">
            <thead>
            <tr>
            <th>No</th>
            <th>Name</th>
            <th>Phone</th>
            <th colSpan={2} className="text-center">
                Actions
            </th>
            </tr>
            </thead>
            <tbody>
            
            {

                employees.map((employee, i) => (
                    <tr id="id" key={employee.id}>
                    <td><button onClick={()=>showEmployeeDetails(i)}>{i + 1}</button></td>
                    <td id="Name" >{employee.Name}</td>
                    <td id="Phone">{employee.Phone}</td>
                    <td className="text-right">
                    <button onClick={() => handleEdit(employee.id)}
                    className="button muted-button">Edit</button>
                    </td>
                    <td className="text-left">
                    <button onClick={() => handleDelete(employee.id)}
                    className="button muted-button">Delete</button>
                    </td>
                    
                    </tr>
                    ))
                    
                    }
            </tbody>
            </table>
        </div>
    );
}