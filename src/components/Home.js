import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

import Table from "./employeeTable/Table";
import AddEmpModal from "./modals/AddEmpModal";

const Home = () => {
  const [employee, setEmployee] = useState([]);

  const empHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    fetch(`http://localhost:8080/api/users/name/${name}`)
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  };
  return (
    <div>
      <div className=" min-h-screen bg-base-200">
        <form className="text-center py-5" onSubmit={empHandler}>
          <input
            type="text"
            name="name"
            placeholder="Search"
            className="input input-primary"
          />
          <button className="btn btn-outline btn-primary">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <h2 className="text-3xl text-center">Details from Employee</h2>

        <Table empHandler={employee} />
      </div>
      {/* {isOpen && <AddEmpModal setIsOpen={setIsOpen} />} */}
    </div>
  );
};

export default Home;
