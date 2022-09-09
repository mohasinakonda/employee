import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

const AddEmpModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <input type="checkbox" id="add-emp-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <label
            htmlFor="add-emp-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="text-3xl text-center border-b-4 border-indigo-500 py-3">
            Register an Employee
          </h2>
          <div className="w-3/4 mx-auto pt-5 text-center">
            <div className="avatar items-end ">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
              <div
                onClick={() => setOpen(!open)}
                className="btn transition delay-300 btn-circle btn-ghost text-3xl text-primary p-2"
              >
                <FontAwesomeIcon icon={faPlus} />
              </div>
              {/*  */}
            </div>
            <h3 className="text-xl">Add your profile picture</h3>
            {open && (
              <div className="transition delay-300">
                <form>
                  <input
                    className="input input-primary"
                    type="file"
                    name="profile"
                    id=""
                  />
                  <button className="btn btn-primary">Upload</button>
                </form>
              </div>
            )}
          </div>
          <form className="w-3/4 mx-auto">
            <label className="label" htmlFor="name">
              Employee Name*
            </label>
            <input
              type="text"
              name="name"
              placeholder="Input Name"
              required
              className="input input-primary w-full"
            />
            <label className="label" htmlFor="name">
              Email Address*
            </label>
            <input
              type="email"
              name="email"
              placeholder="Input email"
              required
              className="input input-primary w-full"
            />
            <label className="label" htmlFor="name">
              Salary
            </label>
            <input
              type="number"
              name="salary"
              placeholder="Input salary"
              className="input input-primary w-full"
            />
            <label className="label" htmlFor="name">
              Age
            </label>
            <input
              type="date"
              name="date"
              className="input input-primary w-full"
            />
            <div className="flex justify-end">
              <button className="btn btn-primary my-5 btn-end">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmpModal;
