import React, { useEffect, useState } from "react";
import icon from '../../images/svg/sprite.svg';
import style from "./CarListItem.module.css";
import Modal from "../Modal/Modal";
import ItemInfo from "../ItemInfo/ItemInfo";
import { useDispatch } from "react-redux";
import { setFavoriteCars, deleteFavoriteCar,} from "../../redux/slice";
import { selectFavoriteCar } from "../../redux/selectors";
import { useSelector } from "react-redux";

const CarListItem = ({
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heartIconToggle, setHeartIconToggle] = useState(
    `${icon}#icon-normal`
  );
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteCars = useSelector(selectFavoriteCar);

  useEffect(() => {
    if (favoriteCars?.some((car) => car.idCar === idCar)) {
      setIsFavorite(true);
      setHeartIconToggle(`${icon}#icon-active`);
    } else {
      setIsFavorite(false);
      setHeartIconToggle(`${icon}#icon-normal`);
    }
  }, [favoriteCars, idCar]);

  const dispatch = useDispatch();

  const onClickModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const car = {
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
  };

  const handleAddFavoriteCar = () => {
    isFavorite
      ? dispatch(deleteFavoriteCar(idCar))
      : dispatch(setFavoriteCars(car));
  };

  return (
    <li className={style.listItem}>
      <img src={image} alt={model} className={style.carImg} />
      <svg className={style.icon} onClick={handleAddFavoriteCar}>
        <use href={heartIconToggle} />
      </svg>
      <div className={style.wrapName}>
        <div className={style.carName}>
          <p>{make}</p>
          <p className={style.accent}>{model},</p>
          <p>{year}</p>
        </div>
        <p className={style.price}>{rentalPrice}</p>
      </div>

      <div className={style.descrText}>
        <span className={style.descrSpan}>{address}</span>
        <svg className={style.iconStick}>
          <use href={`${icon}#icon-Vector-4`} />
        </svg>
        <span className={style.descrSpan}>{rentalCompany}</span>
        <svg className={style.iconStick}>
          <use href={`${icon}#icon-Vector-4`} />
        </svg>
        <span className={style.descrSpan}>{type}</span>
        <svg className={style.iconStick}>
          <use href={`${icon}#icon-Vector-4`} />
        </svg>
        <span className={style.descrSpan}>{idCar}</span>
        <svg className={style.iconStick}>
          <use href={`${icon}#icon-Vector-4`} />
        </svg>
        <span className={style.descrSpan}>{functionalities}</span>
      </div>

      <button type="button" className={style.carButton} onClick={onClickModal}>
        Learn more
      </button>
      {isModalOpen && (
        <Modal onClick={onClickModal}>
          <ItemInfo
            onClick={onClickModal}
            idCar={idCar}
            year={year}
            make={make}
            model={model}
            type={type}
            image={image}
            description={description}
            fuelConsumption={fuelConsumption}
            engineSize={engineSize}
            accessories={accessories}
            functionalities={functionalities}
            rentalPrice={rentalPrice}
            rentalCompany={rentalCompany}
            address={address}
            rentalConditions={rentalConditions}
            mileage={mileage}
          />
        </Modal>
      )}
    </li>
  );
};

export default CarListItem;
