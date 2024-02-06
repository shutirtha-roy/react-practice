import { useState, useEffect } from "react";

export function DataBinding() {

    const [product, setProduct] = useState({title: '', rating:{rate: 0, ratings: 0, reviews: 0}, price:0, offers: [], image: ''});

    function LoadProduct() {
        fetch("product.json")
        .then((response)=>{
            return response.json();
        })
        .then(product => {
            setProduct(product);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log(`Request Completed`);
        })
    }

    useEffect(() => {
        LoadProduct();
    }, []);

    return(
        <div className="container-fluid">
            <div className="mt-4 row">
                <div className="col-3">
                    <img src={product.image} width="100%" />
                </div>
                <div className="col-9">
                    <div className="h3">
                        {product.title}
                    </div>
                    <div>
                        <span className="badge bg-success text-white p-2">{product.rating.rate} <span className=""></span></span>
                        <span className="ms-3 text-secondary">{product.rating.ratings.toLocaleString()} Ratings & {product.rating.reviews} Reviews</span>
                    </div>
                    <div className="mt-3">
                        <div className="h2 fw-bold">{product.price}</div>
                    </div>
                    <div className="mt-3">
                        <div className="h5">Available</div>
                        <ul className="list-unstyled">
                            {
                                product.offers.map(offer=>
                                    <li key={offer} className="bi bi-tag-fill my-3">{offer}</li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}