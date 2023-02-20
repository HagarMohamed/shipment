import React from 'react'
import {
  MDBFooter,
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter className='text-center text-white footer'>

      <div className='text-center  p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a  href='https://github.com/HagarMohamed/shipment'>
          Hagar Mohamed Abdo
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer
