import React from "react";
import style from "./ItemInfo.module.css";
import icon from '../../images/svg/sprite.svg'

const ItemInfo = ({
  onClick,
  idCar,
  year,
  make,
  model,
  type,
  image,
  description,
  fuelConsumption,
  engineSize,
  accessories,
  functionalities,
  rentalPrice,
  rentalCompany,
  address,
  rentalConditions,
  mileage,
}) => {
  return (
    <div className={style.CarInfoContainer}>
      <img src={image} alt={model} className={style.carImgModal} />

      <div className={style.carName}>
        <p>{make}</p>
        <p className={style.accent}>{model},</p>
        <p>{year}</p>
      </div>

      <div className={style.descrText}>
        <span className={style.descrSpan}>{address}</span>
        <svg className={style.iconStick}>
          <use href={`${icon}#icon-Vector-4`} />
        </svg>
        <span className={style.descrSpan}>Id: {idCar}</span>
        <svg className={style.iconStick}>
          <use href={`${icon}#icon-Vector-4`} />
        </svg>
        <span className={style.descrSpan}>Year: {year}</span>
        <svg className={style.iconStick}>
          <use href={`${icon}#icon-Vector-4`} />
        </svg>
        <span className={style.descrSpan}>Type: {type}</span>
        <svg className={style.iconStick}>
          <use href={`${icon}#icon-Vector-4`} />
        </svg>
        <span className={style.descrSpan}>
          Fuel Consumption: {fuelConsumption}
        </span>
        <svg className={style.iconStick}>
          <use href={`${icon}#icon-Vector-4`} />
        </svg>
        <span className={style.descrSpan}>Engine size: {engineSize}</span>
      </div>
      <p className={style.description}>{description}</p>
      <p className={style.accessTitle}>Accessories and functionalities:</p>
      <div>
        <span>{accessories}</span>
        <span>{functionalities}</span>
      </div>
      <p className={style.accessTitle}>Rental Conditions:</p>
      <div>
        <p>Minimum age: {rentalConditions}</p>
        <p>Mileage: {mileage}</p>
        <p>Price: {rentalPrice}</p>
      </div>
      <a href="tel:+380730000000" className={style.carModalBtn}>
        Rental car
      </a>
    </div>
  );
};

export default ItemInfo;
