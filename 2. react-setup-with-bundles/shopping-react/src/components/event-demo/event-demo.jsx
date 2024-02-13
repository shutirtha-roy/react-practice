import axios from "axios";
import { useEffect, useState } from "react";

export function EventDemo() {

    const [msg, setMsg] = useState('');
    const [progressClass, setProgressClass] = useState('');
    const [progressStyle, setProgressStyle] = useState({width: '0%'});

    function VerifyPassword(e) {
        if(e.target.value.match(/(?=.*[A-Z])\w{4,15}/)) {
            setMsg('Strong Password');
            setProgressClass('bg-success');
            setProgressStyle({width: '100%'});

        } else {
            if (e.target.value.length < 4) {
                setMsg('Poor Password');
                setProgressClass('bg-danger');
                setProgressStyle({width: '30%'});
            } else {
                setMsg('Weak Password');
                setProgressStyle({width: '60%'});
            }
        }
    }

    return(
        <div className="container-fluid m-2 p-4">
           <h2>Register User</h2>
           <dl className="w-25">
                <dt>Password</dt>
                <dd><input type="password" className="form-control" onKeyUp={VerifyPassword} /></dd>
                <dd className="progress">
                    <div className={`progress-bar progress-bar-stripped progress-bar-animated ${progressClass}`} style={{width: progressStyle}}>
                        {msg}
                    </div>
                </dd>
           </dl>
        </div>
    )
}