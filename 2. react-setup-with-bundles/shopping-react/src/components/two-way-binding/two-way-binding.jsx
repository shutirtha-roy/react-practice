import { useState } from "react";

export function TwoWayBinding() {
    const [userName, setUserName] = useState('Joh');

    function handleNameChange(e) {
        setUserName(e.target.value)
    }

    return(
        <div className="container-fluid">
            <h3>Edit</h3>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onChange={handleNameChange} value={userName}/></dd>
                <p>Hello {userName}</p>
            </dl>
        </div>
    )
}