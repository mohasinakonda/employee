import React from "react";
import { toast } from "react-toastify";

const DeleteModal = ({ employee, setEmployee, refetch }) => {
  const deleteEmployee = () => {
    fetch(
      `https://employee-management-server2.herokuapp.com/api/users/${employee._id}`,
      {
        method: "delete",
      }
    ).then((res) => {
      if (res.status === 200) {
        toast.success("Delete successful");
        setEmployee(null);
        refetch();
      }
    });
  };
  return (
    <div>
      <input type="checkbox" id="delete-emp-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-2xl">
            Hi <span className="text-primary">{employee.name}</span> Are you
            sure to delete?
          </h3>

          <div className="modal-action">
            <label htmlFor="delete-emp-modal" className="btn">
              Cancel
            </label>
            <button
              onClick={deleteEmployee}
              className="btn btn-outline btn-error "
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
