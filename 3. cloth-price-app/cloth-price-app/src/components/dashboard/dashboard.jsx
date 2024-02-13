import { useState, useEffect } from "react";
import axios from "axios";
import "./dashboard.css";

export function Dashboard() {

    const [productList, setProductList] = useState([]);

    function LoadProduct() {
        axios.get("product.json").then((response) => {
            console.log('IT IS HERE');
            setProductList(response.data);
        }).catch((ex) => {
            console.log(ex);
        });
    }

    useEffect(() => {
        LoadProduct();
        console.log("PRODUCT LIST", productList)
    }, []);

    return(
        <div className="container-fluid">
            <h2>Product List</h2>
            <ol>
                {
                    productList.map(product => <li key={product.name}>{product.name}  ${product.price} ({product.category})</li>)
                }
            </ol>
        </div>
    )

}