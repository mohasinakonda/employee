import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-around bg-base-100">
      <div className="">
        <h2 className="text-2xl">welcome</h2>
      </div>
      <div className="">
        <ul className="menu menu-horizontal p-0">
          <label htmlFor="add-emp-modal" className="btn modal-button">
            Add
          </label>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
