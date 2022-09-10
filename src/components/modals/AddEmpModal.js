import React, { useState } from "react";
import { toast } from "react-toastify";
import Photo from "./Photo";

const AddEmpModal = ({ setIsOpen, refetch }) => {
  const [photo, setPhoto] = useState("");
  //========================HANDLE EMPLOYEE FUNCTION ===========
  const handleEmployee = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const salary = event.target.salary.value;
    const joiningDate = event.target.joinDate.value;
    const employeeInfo = { name, email, salary, joiningDate, photo };
    fetch(`http://localhost:8080/api/users/`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(employeeInfo),
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Register success full");
        setIsOpen(false);
        refetch();
      }
    });
  };

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

          <Photo setPhoto={setPhoto} />
          <form onSubmit={handleEmployee} className="w-3/4 mx-auto">
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
            <label className="label" htmlFor="email">
              Email Address*
            </label>
            <input
              type="email"
              name="email"
              placeholder="Input email"
              required
              className="input input-primary w-full"
            />
            <label className="label" htmlFor="salary">
              Salary
            </label>
            <input
              type="number"
              name="salary"
              placeholder="Input salary"
              className="input input-primary w-full"
            />
            <label className="label" htmlFor="joinDate">
              Joining Date
            </label>
            <input
              type="date"
              name="joinDate"
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
