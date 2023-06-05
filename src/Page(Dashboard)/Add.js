import React, {useState, useRef, useEffect} from "react"
import Swal from 'sweetalert2';

function Add({employees, setEmployees, setIsAdding}){

    const [Name, setName] = useState('');
    const [Phone, setPhone] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!Name || !Phone) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id,
            Name,
            Phone
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${Name}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }




    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add New Employee</h1>
                <label htmlFor="Name">Name</label>
                <input
                    id="Name"
                    type="text"
                    ref={textInput}
                    name="Name"
                    value={Name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="Phone">Phone</label>
                <input
                    id="Phone"
                    type="number"
                    name="Phone"
                    value={Phone}
                    onChange={e => setPhone(e.target.value)}
                />

                
                <br></br>
                
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add;