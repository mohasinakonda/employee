import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAdd } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

import Table from "./employeeTable/Table";

const Home = () => {
  const [employee, setEmployee] = useState([]);

  const empHandler = (event) => {
    event.preventDefault();
    const name = event.target.value;
    setEmployee(name);
  };
  return (
    <div>
      <div className=" min-h-screen bg-base-200">
        <form className="text-center py-5" onSubmit={empHandler}>
          <input
            type="text"
            name="name"
            onChange={empHandler}
            placeholder="Search"
            className="input input-primary"
          />
          <button className="btn btn-outline btn-primary">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <label
            htmlFor="add-emp-modal"
            className="btn btn-outline mx-2  modal-button"
          >
            <FontAwesomeIcon icon={faAdd} />
          </label>
        </form>

        <h2 className="text-3xl text-center border-b-4 border-indigo-500 py-3 w-3/4 mx-auto">
          Details from Employee
        </h2>

        <Table empInfo={employee} />
      </div>
    </div>
  );
};

export default Home;
