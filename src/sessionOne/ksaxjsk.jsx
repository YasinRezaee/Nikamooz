import React, { useEffect, useState } from "react";



const Get = () => {
    const [users,setUsers] = useState([]);
    const [newPerson, setNewPerson]=useState({})
  const getAllUser = async () => {
    const response = await fetch("http://localhost:8000/users");
    setUsers(await response.json());
    console.log(users);
};

    useEffect(() => {
      getAllUser();
    },[]);

const addPerson= async(e)=>{
  e.preventDefault()

    const response = await fetch('http://localhost:8000/users', {
      method: 'POST',
      body: JSON.stringify(newPerson),
      headers: {
        'Content-Type': 'application/json'
      }
      });
      const result = await response.json();
      setUsers([...users, newPerson])
    }


    return (
      <>
      { users.map((ce) => 
           <div key={ce.name}>
               <h2>{ce.name}</h2>
           </div>)}
           <form onSubmit={addPerson}>
              <input type="text" onChange={e => setNewPerson({...newPerson, name: e.target.value})} />
              <button type="submit">Submit</button>
            </form>
     </>
    )
  
}
     
       
export default Get;