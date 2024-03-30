import axios from 'axios'
import apiurl from '../apiendpoint/apienspoint';
export const apiregisterdonor=async(datas)=>{
    const res= await axios.post(`${apiurl()}/api/apiregisterdonor`,datas);
    return res.data;
}