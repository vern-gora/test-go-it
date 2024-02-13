import icon from '../../images/svg/sprite.svg';
import Portal from "./Portal";
import style from "./Modal.module.css";
import React, { useEffect } from "react";

const ModalWindow = ({ children, onClick }) => {
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClick();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleClose = () => {
    onClick();
  };

  const handleCloseBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  return (
    <Portal>
      <div className={style.backdrop} onClick={handleCloseBackdrop}>
        <div className={style.container}>
          <svg className={style.closeIcon} onClick={handleClose}>
            <use href={`${icon}#icon-close-icon`} />
          </svg>
          <div className={style.childrenWrap}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};

export default ModalWindow;
