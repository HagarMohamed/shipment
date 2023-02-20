import React, { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import Tableview from "./Tableview";
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import localData from "../data";

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
  let [loading, setLoading] = useState(true)


  const fetchAxios = async () => {
    await axios.get('https://my.api.mockaroo.com/shipments.json?key=5e0b62d0').then(responce => {
      setLoading(false);
        setShips(responce.data)
    }).catch(error => {
      setLoading(false);
      setShips(localData)
    })

  }



  useEffect(() => {
    fetchAxios()
  }, [])




  return (
    <div>
      {
      loading === true? (<Spinner animation="border" variant="info" id="spintarget"/>) : (
      <Tableview data={data}  updateItem={updateItem} deleteItem={deleteItem}/>
      )
      }
    </div>

    
  );


};

export default ShipmentsTable;
