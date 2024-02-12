import axios from "axios";
import { useState } from "react";

export function EventDemo() {

    const [styleObj, setStyleObj] = useState({position: 'absolute', top: '', left: ''});

    function GetPosition(e) {
        setStyleObj({
            position: 'absolute',
            top: e.clientY + 'px',
            left: e.clientX + 'px'
        })
    }

    return(
        <div onMouseMove={GetPosition} className="container-fluid m-2 p-4">
            <div style={{height: '1000px'}}>
                <p>Move mouse pointer to test</p>
            </div>
            <img style={styleObj} width="50" height="50" src="flag.gif" />
        </div>
    )
}