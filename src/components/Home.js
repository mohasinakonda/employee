import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

import Table from "./employeeTable/Table";
import AddEmpModal from "./modals/AddEmpModal";

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <div className=" min-h-screen bg-base-200">
        <form className="text-center py-5">
          <input
            type="text"
            placeholder="Search"
            className="input input-primary"
          />
          <button className="btn btn-outline btn-primary">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <h2 className="text-3xl text-center">Details from Employee</h2>

        <Table />
      </div>
      {isOpen && <AddEmpModal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Home;
