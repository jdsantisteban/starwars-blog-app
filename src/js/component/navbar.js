import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logosw from "../../img/logosw.jpg";

export const Navbar = () => {
  const { store } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img src={logosw} alt="StarWars Logo" width={50} />
          </span>
        </Link>
        <div className="ml-auto">
          <div className="dropdown ">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites
              {/* Favorites {store.favorites.length} */}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {/* {store.favorites.map((item) => {
                return (
                  <li key={item._id}>
                    <a className="dropdown-item" href="#">
                      {item.properties.name}
                    </a>
                  </li>
                );
              })} */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
