import React from "react";
import CarList from "../../components/CarList/CarList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../../redux/selectors";
import carsOperations from "../../redux/operations.js";
import style from "./Catalog.module.css";
import Filter from "../../components/Filter/Filter";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(carsOperations.fetchCars());
  }, [dispatch]);


  return (
    <section>
      <Filter />
      <div>{cars && <CarList />}</div>
      <button
      className={style.btnCatalog}
      type="button">
        Load more
      </button>
    </section>
  );
};

export default CatalogPage;
