import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../AxiosR';
import { Link } from 'react-router-dom';


export default function List() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {

    try {

      const {data} = await baseUrl.get("/all");
    

      if (data?.success) {
        setData(data?.data || []);
      }

    } catch (err) {
      console.log(err);
    }
  }


  const handleDelete=async(id)=>{
const {data}=await baseUrl.post("/delete",{id});
if(data?.success){
  alert(data?.message);
  getAll(); 
}
  }

  return (
    <div>

      <table border="1">

        <thead>
          <tr>
            <th><input type='checkbox'/></th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((item, idx) => {
            return (
              <tr key={idx}>
                <td><input type='checkbox'/></td>
                <td>{item?.title}</td>
                <td>{item?.description}</td>
                <td><button onClick={()=>handleDelete(item._id)}>Delete</button></td>
                <td><button><Link to={"update/"+item._id}>Update</Link></button></td>
              </tr>
            )
          })}
        </tbody>

      </table>

    </div>
  )
}