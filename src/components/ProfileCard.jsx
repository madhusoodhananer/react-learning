import React, { useState } from "react";
import DataForm from "./DataForm";
const ProfileCard = () => {
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    setData(formDataObj);
  };
  return (
    <div>
      <div style={{ display: "flex" }}></div>
      <div style={{ flex: 1 }}>
        <DataForm onSubmit={handleSubmit} />
      </div>
      <div
        style={{
          flex: 1,
          backgroundColor: "lightgray",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div className="profile-card">
          {data.photo && (
            <img
              src={URL.createObjectURL(data.photo)}
              alt="Profile"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
          )}
          <h2>{data.name}</h2>
          <p>{data.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
