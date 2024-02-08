import { useState } from "react";

export function StyleDemo() {

    const [nameError, setNameError] = useState({ display: 'block', color: 'red'});
    const [elementColor, setElementColor] = useState({ border: '1px solid red'});

    function handleNameChange(e) {
        if(e.target.value == "") {
            setNameError({ display: 'block', color: 'red' });
            setElementColor({ border: '1px solid red' });
        } else {
            setNameError({ display: 'none'});
            setElementColor({ border: '1px solid green' });
        }
    }

    return(
        <div className="container-fluid">
            <dl>
                <dt>User Name</dt>
                <dd><input type="text"  style={elementColor} onChange={handleNameChange} /></dd>
                <dd style={nameError}>Name Required</dd>
            </dl>
        </div>
    )
}