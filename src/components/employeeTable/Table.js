import React, { useEffect, useState } from "react";

const Table = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/users/")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-3/4 mx-auto">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>salary</th>
            <th>Joining date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={employee.photo} alt={employee.name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{employee.name}</div>
                  </div>
                </div>
              </td>
              <td>{employee.email}</td>
              <td>{employee.salary || "-"}</td>
              <td>{employee.joiningDate || "-"}</td>
              <th>
                <button className="btn btn-ghost btn-xs">edit</button>
                <button className="btn btn-error btn-xs">delete</button>
              </th>
            </tr>
          ))}
        </tbody>
        {/* <!-- foot --> */}
      </table>
    </div>
  );
};

export default Table;
