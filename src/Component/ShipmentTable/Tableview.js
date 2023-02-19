import React from 'react'
import ErrorTemplate from '../ErrorTemplate';
import Table from 'react-bootstrap/esm/Table';
import ShipmentItem from './ShipmentItem';

const Tableview = ({data, deleteItem, updateItem}) => {
  return (
    <Table responsive="sm">
    <thead>
      <tr>
        <th>ORDERNO</th>
        <th>DELIVERYDATE</th>
        <th>CUSTOMER</th>
        <th>TRACKINGNO</th>
        <th>STATUS</th>
        <th>CONSIGNEE</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {data.length ? (
        data.map((item, index) => {
          return (
            <ShipmentItem
              index={index}
              key={index}
              orderNo={item.orderNo}
              date={item.date}
              customer={item.customer}
              trackingNo={item.trackingNo}
              status={item.status}
              consignee={item.consignee}
              onclick={deleteItem}
              clicked={updateItem}
            />
          );
        })
      ) : (
        <ErrorTemplate  title={"Error"} description={"The Data is Empty"} />
      )}
    </tbody>
  </Table>
  )
}

export default Tableview
