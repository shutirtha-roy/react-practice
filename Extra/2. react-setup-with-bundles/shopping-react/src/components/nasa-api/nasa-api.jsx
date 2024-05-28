import axios from "axios";
import { useEffect, useState } from "react";

export function NasaAPI()
{
    const [mars, setMars] = useState();

    useEffect(() => {
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
        .then((response) => {
            setMars(response.data);
        })
    }, []);

    return(
        <div className="container-fluid">
            <h2>Mars Rover Photos</h2>
            <div className="d-flex flex-wrap">
                {
                    mars.photos.map(photo => {
                        <div key={photo.id} className="card p-2 m-2" style={{width: '200px'}}>
                            <a href={photo.src} target="_blank">
                                <img src={photo.img_src} className="card-img-top" height="200"/>
                            </a>
                            <div className="card-header">
                                <h3>{photo.id}</h3>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}