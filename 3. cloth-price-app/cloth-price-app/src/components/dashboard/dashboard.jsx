import { useState, useEffect } from "react";
import axios from "axios";
import "./dashboard.css";

export function Dashboard() {

    const [product, setProduct] = useState([]);

    function LoadProduct() {
        axios.get("product.json").then((response) => {
            console.log(response);
            setProduct(response.data);
        }).catch((ex) => {
            console.log(ex);
        });
    }

    useEffect(() => {
        LoadProduct();
    }, []);

    return(
        <div className="container-fluid">
            
        </div>
    )

}