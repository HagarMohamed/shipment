import React from 'react'
import Button from 'react-bootstrap/esm/Button'



const ShipmentItem = (props) => {

    const handleDelete = () =>{
        props.onclick(props.index)
    }
    
    const handleUpdate = () =>{
         props.clicked(props.index)
       
    }
    

  return (
            <tr>
                <td>{props.orderNo}</td>
                <td>{props.date}</td>
                <td>{props.customer}</td>
                <td>{props.trackingNo}</td>
                <td>{props.status}</td>
                <td>{props.consignee}</td>
                <td>
                  <Button onClick={handleUpdate} variant="info">details</Button>{" "}
                  </td>
                  <td>
                  <Button onClick={handleDelete} variant="danger">delete</Button>{" "}
                </td>
              </tr>
  )
}

export default ShipmentItem
