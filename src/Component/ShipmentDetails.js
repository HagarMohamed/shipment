import React from "react";
import Form from "react-bootstrap/Form"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import { Link, useSearchParams } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";


const ShipmentDetails = () => {

    
 const [searchParams] = useSearchParams();
        console.log(searchParams)


  return (
    <div className="container">
      <h4>Shipment Details</h4>
      <Form>
      <Row>
        <Col>
        <Form.Label>orderNo</Form.Label>
        <Form.Control className="mb-3" type="text" disabled readOnly value={searchParams.get("orderNo")}/>

        <Form.Label>customer</Form.Label>
        <Form.Control className="mb-3" type="text" disabled readOnly value={searchParams.get("customer")} />

        <Form.Label>consignee</Form.Label>
        <Form.Control className="mb-3" type="text" disabled readOnly value={searchParams.get("consignee")} />
      </Col>

      <Col>
        <Form.Label>date</Form.Label>
        <Form.Control className="mb-3" type="text" disabled readOnly value={searchParams.get("date")} />

        <Form.Label>trakingNo</Form.Label>
        <Form.Control className="mb-3" type="text" disabled readOnly value={searchParams.get("trackingNo")} />

        <Form.Label>status</Form.Label>
        <Form.Control className="mb-3" type="text" disabled readOnly value={searchParams.get("status")} />
      </Col>

        
      </Row>
      </Form>

      <Button  variant="warning"><Link to="/ShipmentsTable" style={{textDecoration: "none",
    color: "black"}}>Back</Link></Button>{' '}
    </div>
  );
};

export default ShipmentDetails;
