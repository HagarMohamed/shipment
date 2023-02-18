import Alert from 'react-bootstrap/Alert';
import React from 'react'


const ErrorTemplate = (props) => {

    console.log(props)
      return (
        <Alert variant="danger">
          <Alert.Heading>{props.title}</Alert.Heading>
          <p>
            {props.description}
          </p>
        </Alert>
      );
    }
  



export default ErrorTemplate
