import { useState } from "react";
import "./style-demo.css";

export function StyleDemo() {

    const [theme, setTheme] = useState('bg-light text-dark');
    const [btnStyle, setBtnStyle] = useState('btn btn-dark w-100');

    function ThemeChange(e) {
        if (e.target.checked) {
            setTheme('bg-dark text-white');
            setBtnStyle('btn btn-light w-100');
        } else {
            setTheme('bg-light text-dark');
            setBtnStyle('btn btn-light w-100');
        }
    }

    return(
        <div className="container-fluid d-flex justify-content-center align-items-center">
            <div className="box">
                Normal Text
                <h1 style={{border:'inherit', padding: 'inherit'}}>Welcome to React</h1>
            </div>
        </div>
    )
}