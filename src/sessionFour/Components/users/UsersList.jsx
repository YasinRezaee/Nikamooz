import React, { useEffect, useState } from "react";
import Loading from "../../GlobalData/Loading";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(users);
  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      getUsers();
    }, 1000);
  }, []);
  const getUsers = () => {
    const api = "http://localhost:5000/users";
    fetch(api)
      .then((respose) => respose.json())
      .then(
        (data) => {
          setUsers(data);
          setIsLoading(false);
        },
        (error) => {
          alert(error);
          setIsLoading(false);
        }
      );
  };
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">کد کاربر</th>
            <th scope="col">نام و نام خانوادگی</th>
            <th scope="col">  نام کاربری </th>
            <th scope="col"> پسورد</th>
            <th scope="col"> توکن شخصی</th>
            <th scope="col">مدیریت اشخاص</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          {isLoading ? <Loading/> :
           users.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.fullName}</td>
              <td>{item.userName}</td>
              <td>{item.password}</td>
              <td>{item.token}</td>
              <td>
                <button className="btn btn-sm btn-warning">حذف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersList;
