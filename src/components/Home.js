import React from "react";
import AddEmployee from "./AddEmployee";
import Employee from "./Employee";
import AddEmpModal from "./modals/AddEmpModal";

const Home = () => {
  return (
    <div>
      <div className=" min-h-screen bg-base-200">
        <form>
          <input type="text" className="input input-primary" />
          <button className="btn btn-primary">find</button>
        </form>
      </div>
      <AddEmpModal />
    </div>
  );
};

export default Home;
