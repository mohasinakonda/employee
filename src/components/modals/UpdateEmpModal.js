import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UpdateEmpModal = ({ id, setId, refetch }) => {
  const [employee, setEmployee] = useState({});
  useEffect(() => {
    fetch(`https://employee-management-server2.herokuapp.com/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }, [id]);

  const updateEmployee = (event) => {
    event.preventDefault();
    const name = event.target.name.value || employee.name;
    const email = event.target.email.value || employee.email;

    const salary = event.target.salary.value || employee.salary;
    const joiningDate = event.target.joinDate.value || employee.joiningDate;
    const info = { name, email, salary, joiningDate };
    fetch(`https://employee-management-server2.herokuapp.com/api/users/${id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    }).then((res) => {
      if (res.status === 200) {
        toast.success("update successful!");
        setId("");
        refetch();
      }
    });
  };
  return (
    <div>
      <input type="checkbox" id="update-emp-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <label
            htmlFor="update-emp-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="text-3xl text-center border-b-4 border-indigo-500 py-3">
            Update your Information
          </h2>

          <form onSubmit={updateEmployee} className="w-3/4 mx-auto">
            <label className="label" htmlFor="name">
              Employee Name*
            </label>
            <input
              type="text"
              name="name"
              placeholder="Input name"
              className="input input-primary w-full"
            />
            <label className="label" htmlFor="email">
              Email Address*
            </label>
            <input
              type="email"
              name="email"
              placeholder="Input Email"
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
              <button className="btn btn-primary my-5 btn-end">update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmpModal;
