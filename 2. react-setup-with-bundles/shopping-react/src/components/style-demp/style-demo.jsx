import { useState } from "react";
import "./style-demo.css";

export function StyleDemo() {

    const [nameError, setNameError] = useState('');
    const [required, setRequired] = useState('d-block text-danger');

    function handleNameChange(e) {
        if(e.target.value == "") {
            setNameError('invalid-style');
            setRequired('d-block text-danger');
        } else {
            setNameError('valid-style');
            setRequired('d-none');
        }
    }

    return(
        <div className="container-fluid">
            <dl>
                <dt>User Name</dt>
                <dd><input type="text"  className={nameError} onChange={handleNameChange} /></dd>
                <dd className={required}>Name Required</dd>
            </dl>
        </div>
    )
}