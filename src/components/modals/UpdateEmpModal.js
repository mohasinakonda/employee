import React, { useEffect } from "react";

const UpdateEmpModal = ({ id }) => {
  useEffect(() => {
    fetch(`http://localhost:8080/api/users/${id}`).then((res) => res.json());
  }, [id]);

  const updateEmployee = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const salary = event.target.salary.value;
    const joinDate = event.target.joinDate.value;
    const info = { name, email, salary, joinDate };
    fetch(`http://localhost:8080/api/users/${id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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
              required
              className="input input-primary w-full"
            />
            <label className="label" htmlFor="email">
              Email Address*
            </label>
            <input
              type="email"
              name="email"
              placeholder="Input Email"
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
              <button className="btn btn-primary my-5 btn-end">update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmpModal;
