import React from "react";
import { options } from "../../redux/categories";
// import style from "./Filter.module.css";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { setFilterList } from "../../redux/slice";

const Filter = () => {
  const dispatch = useDispatch();
  const handleSelectChange = (e) => {
    dispatch(setFilterList(e.value));
  };
  return (
    <div
    // className={style.filterContainer}
    >
      <Select
        options={options}
        placeholder="Enter the text"
        onChange={handleSelectChange}
      />
    </div>
  );
};

export default Filter;
