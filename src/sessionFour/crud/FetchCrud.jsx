import React, { useEffect, useRef, useState } from "react";
import UserCombo from "./UserCombo";
import "../GlobalData/fetch-crud.css"
import {
  getAllAsync,
  // insert,
  insertAsync,
  removeAsync,
} from "./services/postService";
const FetchCrud = () => {
  const titleRef = useRef();
  const textAreaRef = useRef();
  const [userId, setUserId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);
  //----------------------------------------------
  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllAsync();
      setComments([...result]);
    };
    fetchData();
  }, []);
  //----------------------------------------
  const changeUsers = (id) => {
    setUserId(id);
  };
  const save = async (event) => {
    debugger;
    event.preventDefault();
    setIsLoading(true);
    let post = {
      title: titleRef.current.value,
      body: textAreaRef.current.value,
      userId: userId,
      //تا اینجا آبجکت ساخته شد. حالا آن را به سمت سرور می فرستیم
    };
    // insert(post)
    await insertAsync(post);  
    setIsLoading(false);
  };
  //-----------------------------------------------------------
  const removeComment = async (id) => {
    const result = await removeAsync(id);
    if (result) {
      setComments([...comments.filter((q) => q.id !== id)]);
    }
  };
  return (
    <div className="card">
      <div className="card-header">
        <h3>مدیریت داده ها با Fetch</h3>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-4">
            <form
              onSubmit={(event) => {
                save(event);
              }}
            >
              <div className="mb-3">
                <label className="form-label">عنوان : </label>
                <input ref={titleRef} className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">کاربر :</label>
                <UserCombo change={changeUsers} />
              </div>

              <div className="mb-3">
                <label className="form-label">توضیحات :</label>
                <textarea ref={textAreaRef} className="form-control" />
              </div>
              <button
                disabled={isLoading ? "disabled" : ""}
                type="submit"
                className="btn btn-primary"
              >
                ذخیره
              </button>
            </form>
          </div>
          <div className="col-8 crud-overflow">
            <table className="table table-striped table-bordered table-hover ">
              <thead className="table-dark">
                <tr>
                  <th scope="col">آیدی</th>
                  <th scope="col"> آیدی کاربر</th>
                  <th scope="col">عنوان</th>
                  <th scope="col">نظرات</th>
                  <th scope="col">مدیریت</th>
                </tr>
              </thead>
              <tbody className="fst-italic">
                {comments.map((cmt) => {
                  return (
                    <tr key={cmt.id}>
                      <td>{cmt.id}</td>
                      <td>{cmt.userId}</td>
                      <td>{cmt.title}</td>
                      <td>{cmt.body}</td>
                      <td>
                        <button
                          onClick={() => {
                            removeComment(cmt.id);
                          }}
                          className="btn btn-sm btn-danger"
                        >
                          حذف
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FetchCrud;
