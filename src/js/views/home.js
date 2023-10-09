import React, {useContext} from "react";
import { Context } from "../store/appContext";

// styles
import "../../styles/home.css";

export const Home = () => {
	const { store } = useContext(Context);

  return (
	<>
	
    <div className="container mt-2">
      <h1 className="text-danger">Characters</h1>
      <div className="d-flex mycarrousel gap-2">
        {store.people.map((item) => {
          return (
            <div
              key={item._id}
              className="card border"
              style={{ minWidth: "300px" }}
            >
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
                alt={item.properties.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{item.properties.name}</h5>
                <p className="card-text">Gender: {item.properties.gender}</p>
                <p className="card-text">
                  Hair Color: {item.properties.hair_color}
                </p>
                <p className="card-text">
                  Eye Color: {item.properties.eye_color}
                </p>
              </div>
              <div className="card-buttons d-flex justify-content-around mb-2">
                <button type="button" className="btn btn-outline-primary">
                  Learn more!
                </button>
                <span>
                  <i className="far fa-heart text-warning border border-warning fs-4 p-2"></i>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>

	<div className="container mb-5">
      <h1 className="text-danger">Planets</h1>
      <div className="d-flex mycarrousel gap-2">
        {store.planets.map((item) => {
          return (
            <div
              key={item._id}
              className="card border"
              style={{ minWidth: "300px" }}
            >
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
                alt={item.properties.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{item.properties.name}</h5>
                <p className="card-text">Population: {item.properties.population}</p>
                <p className="card-text">
                  Terrain: {item.properties.terrain}
                </p>
              </div>
              <div className="card-buttons d-flex justify-content-around mb-2">
                <button type="button" className="btn btn-outline-primary">
                  Learn more!
                </button>
                <span>
                  <i className="far fa-heart text-warning border border-warning fs-4 p-2"></i>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
	</>
  );
}
