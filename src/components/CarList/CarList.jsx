import React from "react";
import CarListItem from "../CarListItem/CarListItem.jsx";
import { useSelector } from "react-redux";
import { selectCars, selectPriceFilter } from "../../redux/selectors";
import style from "./CarList.module.css";

const CarList = () => {
  const cars = useSelector(selectCars);
  const filterList = useSelector(selectPriceFilter);

  const getFilteredCars = () => {
    let filteredCars = cars.filter((car) => car.make.includes(filterList));
    return filteredCars;
  };

  const visibleCars = getFilteredCars();
  return (
    <ul
    className={style.carList}
    >
      {visibleCars.map((car) => (
        <CarListItem
          key={car.id}
          image={car.img}
          make={car.make}
          model={car.model}
          year={car.year}
          rentalPrice={car.rentalPrice}
          address={car.address}
          rentalCompany={car.rentalCompany}
          type={car.type}
          idCar={car.id}
          functionalities={car.functionalities}
          description={car.description}
          fuelConsumption={car.fuelConsumption}
          engineSize={car.engineSize}
          accessories={car.accessories}
          rentalConditions={car.rentalConditions}
          mileage={car.mileage}
        />
      ))}
    </ul>
  );
};

export default CarList;
