import React, { useEffect, useState } from "react";

const UserCombo = ({ change }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = () => {
    const apiUrl = "http://localhost:5000/users2";
    fetch(apiUrl)
      .then((response) => response.json())
      .then(
        (data) => {
          setUsers(data);
        },
        (error) => {
          console.log(error, "error happend");
        }
      );
  };
  return (
    <select
      className="form-control"
      onChange={(event) => change(event.target.value)}
    >
      <option>انتخاب کنید</option>
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
};

export default UserCombo;
