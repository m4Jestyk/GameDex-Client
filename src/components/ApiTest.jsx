import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';

const ApiTest = () => {

    const fetchData = async() => {
        const data = await axios.get("http://localhost:8080/api/v1/games?name=theft");
        console.log(data.data);
    }

    useEffect(()=> {
        fetchData();
    }, [])
    

  return (
    <div>ApiTest</div>
  )
}

export default ApiTest