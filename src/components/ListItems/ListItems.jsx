import React from "react";
import "./ListItems.css";

function ListItems({ arrshape }) {
  return (
    <div className="ListItems">
      <div className="list-shapes">
        <ul className="list-shapes">
          <div className="empty-container"></div>
          <li className="list-shape">
            <div className="shape-container">
              <div className={arrshape[0]}></div>
            </div>
          </li>
          <li className="list-shape">
            <div className="shape-container">
              <div className={arrshape[1]}></div>
            </div>
          </li>
          <li className="list-shape">
            <div className="shape-container">
              <div className={arrshape[2]}></div>
            </div>
          </li>
          <li className="list-shape">
            <div className="shape-container">
              <div className={arrshape[3]}></div>
            </div>
          </li>
          <li className="list-shape">
            <div className="shape-container">
              <div className={arrshape[4]}></div>
            </div>
          </li>
          <li className="list-shape">
            <div className="shape-container">
              <div className={arrshape[5]}></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ListItems;
