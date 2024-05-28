import axios from "axios";
import { useEffect, useState } from "react";

export function EventDemo() {

    const [amount, setAmount] = useState(10000);
    const [years, setYears] = useState(1);
    const [rate, setRate] = useState(10.45);
    const [emi, setEmi] = useState(0);

    function handleAmountChange(e) {
        setAmount(e.target.value);
    }

    function handleYearChange(e) {
        setYears(e.target.value);
    }

    function handleRateChange(e) {
        setRate(e.target.value);
    }

    function CalculateClick() {
        var P = amount;
        var r = rate / 12 / 100;
        var n = years * 12;
        var result = P * r * Math.pow(1 + r, n) / Math.pow(1 + r, n) - 1;
        setEmi(result);
    }

    return(
        <div className="container-fluid bg-secondary m-2 p-4">
           <h1 className="text-center text-white">Personal Loan EMI Calculator</h1>
           <div className="bg-light text-dark p-4">
                <div className="row mt-4">
                    <div className="col">
                        Amount you need <input size="4" type="text" value={amount} />
                    </div>
                    <div className="col">
                        for <input type="text" size="4" value={years} /> years
                    </div>
                    <div className="col">
                        Interest rate <input type="text" size="4" value={rate}  /> %
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        $10,000 <input type="range" onChange={handleAmountChange} min="10000" max="500000" value={amount}  />$5,00,000
                    </div>
                    <div className="col">
                        1 <input type="range"  onChange={handleYearChange} min="1" max="5" value={years} /> 5
                    </div>
                    <div className="col">
                        10.45% <input type="range"  onChange={handleRateChange} min="10.45" step="0.01" max="18.45" value={rate} /> 18.45%
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col text-end">
                        <button onClick={CalculateClick} className="btn btn-primary">
                            Calculate
                        </button>
                    </div>
                </div>
                <div className="mt-4 row">
                    <p className="text-center">Your Monthly Installment is <span className="h3 text-primary">${Math.round(emi)}</span>  for {years * 12} months.</p>
                </div>
           </div>
        </div>
    )
}