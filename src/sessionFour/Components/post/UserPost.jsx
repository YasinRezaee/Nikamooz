import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import Loading from "../../GlobalData/Loading";

const UserPost = () => {
  const [users, setUsers] = useState([]);
  const [comments, setComents]=useState([])
  const [isLoading, setIsLoading]=useState(false)
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
          alert(error, "error happened");
        }
      );
  };
  const changeComment=(event)=>{
   setIsLoading(true)
    const userId=event.target.value
    const apiUrl= `http://localhost:5000/comments?userId=${userId}`;
    fetch(apiUrl)
    .then(response=>response.json())
    .then(
        (data)=>{
            setComents(data)
            setIsLoading(false)
        },(error)=>{
            alert("error ocurred")
        }
    )
  }
  return (
    <div className="card">
      <div className="card-header ">لیست پست های کاربران</div>
      <div className="card-body">
        <div className="row">
          <div className="col">
            <label className="p-2">کاربر مورد نظر :</label>
            <select onChange={(event)=>changeComment(event)} className="form-control">
              <option>انتخاب کنید </option>
              { users.map(user=>
                <option key={user.id} value={user.id}>{user.name}</option>
                )}
            </select>
          </div>
        </div>
           <div className="row">
                {isLoading ? <Loading/> : comments.map(cmt=> <Comments key={cmt.id} info={cmt}/>)}
           </div>
      </div>
    </div>
  );
};

export default UserPost;
