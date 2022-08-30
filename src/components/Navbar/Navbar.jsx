import React, { useState } from "react";
import "./Navbar.css";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguageHandlerTH = (lang) => {
    i18n.changeLanguage("th");
  };
  const changeLanguageHandlerEN = (lang) => {
    i18n.changeLanguage("en");
  };

  const [dropdown, setDropdown] = useState(false);
  return (
    <div>
      <header className="header">
        <h1>{t("Layout & Style")}</h1>
        <div className="changeLang">
          <i
            class="fa-solid fa-globe LangSym"
            onClick={() => {
              setDropdown(!dropdown);
            }}
          ></i>
          <button
            type="submit"
            onClick={changeLanguageHandlerTH}
            className={dropdown ? "show" : "hidden"}
          >
            TH
          </button>
          <button
            type="submit"
            onClick={changeLanguageHandlerEN}
            className={dropdown ? "show" : "hidden"}
          >
            EN
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
