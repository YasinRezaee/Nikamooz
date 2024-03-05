import React, { useEffect, useRef, useState } from "react";
import { getAllUsers2, postService, todosApiUrl } from "./todoService";
import { useNavigate } from "react-router-dom";
const TodosCombo = () => {
  const navigate= useNavigate()
  const [users, setUsers]=useState([]);
  const [todo, setTodos]= useState([])
  const titleRef=useRef()
  const selectRef=useRef()
  const checkRef=useRef(false)
      useEffect(()=>{
        getAllUsers2().then((data)=>{
          setUsers(data)
        })
      },[]);
      useEffect(() => {
        todosApiUrl().then((data) => {
          setTodos(data);
        });
      setTodos(todo)
      }, []);
    
      const submitForm = async (event) => {
        event.preventDefault();
        const formData = {
          title: titleRef.current.value,
          select: selectRef.current.value,
          completed: checkRef.current.checked,
        };
        const reqBody = await postService(formData);
        if (reqBody) {
          setTodos([...todo, reqBody]); // Add the new todo to the existing list of todos

        }
        navigate("/")
      };
  return (
    <form className="p-3" onSubmit={(event)=>submitForm(event)}>
      <label className="form-label">عنوان تسک:</label>
      <div className="col-sm-10 w-100">
        <input ref={titleRef} type="text" className="form-control" />
      </div>
      <label className="form-label ">کاربر:</label>
      <select className="form-select">
        <option  selected>انتخاب کنید...</option>
        {users.map((user) => (
          <option key={user.id} ref={selectRef} className="p-3" value={user.name}>{user.name}</option>
        ))}
      </select>
      <div className="my-3">
        <input ref={checkRef}  className="form-check-input" type="checkbox" />
        <label className="form-check-label mx-4">تسک کامل شده است</label>
      </div>
      <button type="submit" className="btn btn-primary btn-sm">ثبت</button>
    </form>
  );
};

export default TodosCombo;
