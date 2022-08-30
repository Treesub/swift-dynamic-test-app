import React, { useState } from "react";
import "./MoveItems.css";
import { useTranslation } from "react-i18next";
import ListItems from "../ListItems/ListItems";

function MoveItems() {
  const { t } = useTranslation();

  // Force rendering.
  const [rerender, setRerender] = useState(false);

  // State of shape order.
  const [arrshape, setArrshape] = useState([
    "circle-s",
    "square-s",
    "oval-s",
    "rectangle-s",
    "trapezoid-s",
    "parallelogram-s",
  ]);

  const moveLeft = () => {
    arrshape.push(arrshape.shift());
    setArrshape(arrshape);
    setRerender(!rerender);
  };

  const moveRight = () => {
    arrshape.unshift(arrshape.pop());
    setArrshape(arrshape);
    setRerender(!rerender);
  };

  const movePosition = () => {
    let arrshapeRef = arrshape;
    for (let i = 0; i < 3; i++) {
      let temp = arrshapeRef[i];
      arrshapeRef[i] = arrshapeRef[i + 3];
      arrshapeRef[i + 3] = temp;
    }
    setArrshape(arrshapeRef);
    setRerender(!rerender);
  };

  return (
    <div>
      <div className="MoveItems">
        <ul className="move-items-container">
          <li className="move-items-button-container">
            <button
              type="submit"
              onClick={moveLeft}
              className="move-button shape"
            >
              <div className="left-arrow"></div>
              <p className="move-shape-b">{t("Move shape")}</p>
            </button>
            <button onClick={movePosition} className="move-button position">
              <div className="up-arrow"></div>
              <div className="down-arrow"></div>
              <p className="move-position-b">{t("Move position")}</p>
            </button>
            <button onClick={moveRight} className="move-button shape">
              <div className="right-arrow"></div>
              <p className="move-shape-b">{t("Move shape")}</p>
            </button>
          </li>
          <div className="underline"></div>
        </ul>
      </div>
      <ListItems arrshape={arrshape} />
    </div>
  );
}

export default MoveItems;
