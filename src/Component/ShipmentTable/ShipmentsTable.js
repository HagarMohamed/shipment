import React, { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import Tableview from "./Tableview";
import axios from 'axios';

const ShipmentsTable = () => {


  const deleteItem = (index) => {

    let temp = [...data]
    temp.splice(index, 1);
    setShips(temp);
    
  };

  const navigate = useNavigate();
  const updateItem = (index) => {
    let item = data[index];
    navigate({
      pathname: "/ShipmentDetails",
      search: createSearchParams(item).toString(),
    });
  };

  // Fetch Data With Axios
  const [data, setShips] = useState([])
  const fetchAxios = async () =>{
   let responce = await axios.get('https://my.api.mockaroo.com/shipments.json?key=5e0b62d0')
   setShips(responce.data)
  }
  useEffect( () => {
    fetchAxios()
}, [])




  return (
    <div>
      <Tableview data={data}  updateItem={updateItem} deleteItem={deleteItem}/>
    </div>

    
  );


};

export default ShipmentsTable;
