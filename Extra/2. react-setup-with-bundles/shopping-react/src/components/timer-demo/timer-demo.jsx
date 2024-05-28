import { useRef } from "react";
import { useState } from "react";

export function TimerDemo() {

    const [vol, setVol] = useState(0);
    let vol2ref = useRef(null);

    function V1() {
        setVol(10);
    }

    function V2() {
        setVol(20);
    }

    function V3() {
        setVol(30);
    }

    function handleVolumeUp() {
        setTimeout(V1, 5000);
        vol2ref.current = setTimeout(V2, 8000);
        setTimeout(V3, 12000);
    }

    function handleCancel() {
        clearTimeout(vol2ref.current);
    }

    return(
        <div className="container">
            <h3>Time Demo</h3>
            <button onClick={handleVolumeUp} className="bi bi-volume-up me-3"></button>
            <button onClick={handleCancel} className="btn btn-primary">Cancel 20%</button>
            <p>Volume Increased by {vol}%</p>
        </div>
    )
}