import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-around bg-base-100 py-5 border border-indigo-500">
      <div className="">
        <h2 className="text-2xl">welcome to Demo</h2>
      </div>
      <div className="">
        <ul className="menu menu-horizontal p-0"></ul>
      </div>
    </div>
  );
};

export default NavBar;
