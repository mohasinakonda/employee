import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Photo = ({ setPhoto }) => {
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [profilePic, setProfilePic] = useState();

  const photoHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleProfilePic = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);
    const imgbbKey = "1070b643f7a2b1991015cd196bc7ecaa";
    fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        fetch(`https://employee-management-server2.herokuapp.com/api/users/`, {
          method: "put",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ photo: result.data.url }),
        }).then((res) => res.json());
        setProfilePic(result.data.url);
        setPhoto(result.data.url);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="w-3/4 mx-auto pt-5 text-center">
      <div className="avatar items-end ">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={profilePic} alt="" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="btn  btn-circle btn-ghost text-3xl text-primary p-2"
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
        {/*  */}
      </div>
      <h3 className="text-xl">Add your profile picture</h3>
      {open && (
        <div className="transition delay-700">
          <form onSubmit={handleProfilePic}>
            <input
              onChange={photoHandler}
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
  );
};

export default Photo;
