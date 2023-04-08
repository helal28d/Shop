import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";
const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="../img/g1.jpg" />
          <button>
            <Link className="link" to="/Products/1">
              Men
            </Link>
          </button>
        </div>
        <div className="row">
          <img src="../img/g2.jpg" />
          <button>
            <Link className="link" to="/Products/1">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="../img/g3.jpg" />
          <button>
            <Link className="link" to="/Products/1">
              Fashion
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="../img/g4.jpg" />
              <button>
                <Link className="link" to="/Products/1">
                  Childern
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="../img/g5.jpg" />
              <button>
                <Link className="link" to="/Products/1">
                  Dress
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="../img/g6.jpg" />
          <button>
            <Link className="link" to="/Products/1">
              Hats
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
