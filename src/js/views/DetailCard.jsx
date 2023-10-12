import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const DetailCard = () => {
    const { id, nature } = useParams();
    const { store, actions } = useContext(Context);
    const params = useParams();

    const [detail, setDetail] = useState({});

    const search = () => {
        let searchDetail = store.people
            .concat(store.planets)
            .find((item) => item._id === params.id);
        setDetail(searchDetail);
    };

    useEffect(() => {
        search();
    }, [store.people, store.planets]);
    return (
        <div className="container mt-4 border p-4" style={{ width: "600px" }}>
            <div className="row">
                <div className="row top text-center">
                    <div className="card-image col-6">
                        <img
                            src={`https://starwars-visualguide.com/assets/img/${nature}/${detail?.uid}.jpg`}
                            alt={detail?.properties?.name}
                            className="card-img-top"

                        />
                    </div>
                    <div className="card-body col-6">
                        <h1>{detail?.properties?.name}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, ex ullam. Quidem vero aperiam quam facere ea corrupti voluptatum doloribus nesciunt necessitatibus! Labore libero dolore aliquam accusantium id, dignissimos quas!</p>
                    </div>
                </div>
                <hr className="text-danger mt-2" />
                {nature == "characters" ?
                    <div className="bottom text-danger text-center d-flex justify-content-around">
                        <div className="d-flex align-items-center">Name<br /> {detail?.properties?.name}</div>
                        <div className="d-flex align-items-center">Birth Year<br /> {detail?.properties?.birth_year}</div>
                        <div className="d-flex align-items-center">Gender<br /> {detail?.properties?.gender}</div>
                        <div className="d-flex align-items-center">Heihgt<br /> {detail?.properties?.height}</div>
                        <div className="d-flex align-items-center">Skin Color<br /> {detail?.properties?.skin_color}</div>
                        <div className="d-flex align-items-center">Eye Color<br /> {detail?.properties?.eye_color}</div>
                    </div>
                    :
                    <div className="bottom text-danger text-center d-flex justify-content-around">
                        <div className="d-flex align-items-center">Name<br /> {detail?.properties?.name}</div>
                        <div className="d-flex align-items-center">Climate<br /> {detail?.properties?.climate}</div>
                        <div className="d-flex align-items-center">Population<br /> {detail?.properties?.population}</div>
                        <div className="d-flex align-items-center">Orbital Period<br /> {detail?.properties?.orbital_period}</div>
                        <div className="d-flex align-items-center">Rotation Period<br /> {detail?.properties?.rotation_period}</div>
                        <div className="d-flex align-items-center">Diameter<br /> {detail?.properties?.diameter}</div>
                    </div>}


            </div>
        </div>
    );
};

export default DetailCard;