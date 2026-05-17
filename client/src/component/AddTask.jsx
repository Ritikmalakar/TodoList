import React, { useState } from 'react'
import { baseUrl } from '../../AxiosR'
import { useNavigate } from 'react-router-dom'

export default function AddTask() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });

  const dataChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })

  }

  const dataSubmit = async (e) => {

    e.preventDefault();

    try {

      const { data } = await baseUrl.post("/dataSend", formData);

      if (data?.success) {

        alert(data?.message);

        navigate("/");

      }

    } catch (err) {
      console.log(err);
    }

  }

  return (
    <div>

      <h1>Add Task</h1>

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