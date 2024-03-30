import axios from 'axios'
export const getalladdress=async()=>{
    const res= await axios.get('./addressdata/location.json');
    return res.data;
}