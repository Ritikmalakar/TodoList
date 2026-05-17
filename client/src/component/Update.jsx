import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { baseUrl } from '../../AxiosR';

export default function Update() {

  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });
const navigate=useNavigate();
  const { id } = useParams();

  const dataChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    getTask();
  }, []);

  const getTask = async () => {

    try {

      const { data } = await baseUrl.get(`/show/${id}`);

      if (data?.data) {
        setFormData(data.data);
      }

    } catch (error) {
      console.log(error);
    }

  }

  const dataSubmit = async (e) => {

    e.preventDefault();

    try {

      const { data } = await baseUrl.post(`/update/${id}`, formData);

      if (data?.success) {
        alert(data?.message);
        navigate("/")
      }

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div>

      <h1>Update Task</h1>

      <form onSubmit={dataSubmit}>

        <input
          type='text'
          placeholder='enter title'
          name='title'
          value={formData.title}
          onChange={dataChange}
        />

        <br />

        <textarea
          placeholder='type description'
          name='description'
          value={formData.description}
          onChange={dataChange}
        />

        <br />

        <button type='submit'>
          Submit
        </button>

      </form>

    </div>
  )
}