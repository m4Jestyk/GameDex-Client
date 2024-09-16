import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';

const ApiTest = () => {

    // const fetchData = async() => {
    //     // const data = await axios.get("http://localhost:8080/api/v1/games?name=theft");
    //     const data = await axios.get(`${import.meta.env.VITE_SERVER}?name=theft`);
    //     console.log(data.data);
    // }

    const fetchData = async() => {
      try {
          const response = await axios.get(`${import.meta.env.VITE_SERVER}?name=theft`);
          console.log(response.data);
          console.log(import.meta.env.VITE_SERVER);
      } catch (error) {
          console.error('Error:', error.response ? error.response.status : error.message);
      }
  }
  

    useEffect(()=> {
        fetchData();
    }, [])
    

  return (
    <div>ApiTest</div>
  )
}

export default ApiTest