import axios from "axios";
const baseApi = process.env.REACT_APP_API_URL;
const apiURL = `${baseApi}/todos`;
const users2ApiURL= `${baseApi}/users2`;


export const getAllUsers2 = async()=>{
    try{
        const response=await axios.get(users2ApiURL)
        return response.data
    } catch(error){
        console.error('Error fetching data:', error);
    }
}
//************************************************************* */
export const postService= async(data)=>{
    try{
        const response= await axios.post(apiURL, data);
        return response.data
    }catch(error){
        console.error('Error making POST request:', error);
    }
}
//************************************************************* */
export const todosApiUrl= async()=>{
    try{
        const response = await axios.get(apiURL)
        return response.data
    }catch(error){
        console.log('Error fetching data:', error)
    }
} 
//************************************************************* */
export const removeTodo= async(id)=>{
    try {
        const response = await axios.delete(`${apiURL}/${id}`);
        return response.data
      } catch (error) {
        console.error('Error deleting:', error);
      }
}
