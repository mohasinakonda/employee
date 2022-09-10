import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import UpdateEmpModal from "../modals/UpdateEmpModal";

const Table = () => {
  const [employees, setEmployees] = useState([]);
  const [id, setId] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/api/users/")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);
  const updateHandler = (id) => {
    setId(id);
  };
  const deleteHandler = (id) => {
    alert(id);
  };
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
                <label
                  htmlFor="update-emp-modal"
                  onClick={() => updateHandler(employee._id)}
                  className="btn btn-ghost btn-xs"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </label>
                <label
                  onClick={() => deleteHandler(employee._id)}
                  className="btn modal-btn text-red-500 btn-ghost btn-xs"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </label>
              </th>
            </tr>
          ))}
        </tbody>
        {/* <!-- foot --> */}
      </table>
      <UpdateEmpModal id={id} />;
    </div>
  );
};

export default Table;
