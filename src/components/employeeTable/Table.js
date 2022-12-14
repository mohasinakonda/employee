import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import UpdateEmpModal from "../modals/UpdateEmpModal";
import DeleteModal from "../modals/DeleteModal";
import { useQuery } from "react-query";
import AddEmpModal from "../modals/AddEmpModal";
const Table = ({ empInfo }) => {
  const [id, setId] = useState("");
  const [employee, setEmployee] = useState({});
  const [isOpen, setIsOpen] = useState(true);
  const { data, isLoading, refetch } = useQuery("emp", () =>
    fetch("https://employee-management-server2.herokuapp.com/api/users/").then(
      (res) => res.json()
    )
  );
  const filteredData = data?.filter((data) => data.name.includes(empInfo));

  if (isLoading) {
    return <h2 className="text-3xl text-center">Loading...</h2>;
  }

  const updateHandler = (id) => {
    setId(id);
  };
  const deleteHandler = (employee) => {
    setEmployee(employee);
  };

  return (
    <div className="overflow-x-auto w-full ">
      <table className="table w-3/4 mx-auto border border-indigo-500 bg-base-200 shadow-2xl  ">
        {/* <!-- head --> */}
        <thead>
          <tr className="border">
            <th>Name</th>
            <th>Email</th>
            <th>salary</th>
            <th>Joining date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="shadow-lg">
          {filteredData.reverse().map((employee) => (
            <tr className="hover">
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
                  className="btn btn-ghost "
                >
                  <FontAwesomeIcon icon={faEdit} />
                </label>
                <label
                  onClick={() => deleteHandler(employee)}
                  htmlFor="delete-emp-modal"
                  className="btn modal-btn text-red-500 btn-ghost "
                >
                  <FontAwesomeIcon icon={faTrash} />
                </label>
              </th>
            </tr>
          ))}
        </tbody>
        {/* <!-- foot --> */}
      </table>

      {/* =================================================
                                MOdal
      ======================================================
      */}
      {id && <UpdateEmpModal refetch={refetch} setId={setId} id={id} />}
      {employee && (
        <DeleteModal
          refetch={refetch}
          setEmployee={setEmployee}
          employee={employee}
        />
      )}
      {isOpen && <AddEmpModal refetch={refetch} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Table;
