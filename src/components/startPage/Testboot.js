import React from 'react';

import { Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import jsontext from '../../ServerJsonStore';
/*import css */
import './Testboot.css';

/*import de imagens */



const Example = (props) => {
  jsontext.getItensJson()
  return (
    <>
    <Container fluid={true} className='main_container'>
      
        
        
          <h1  className='tittle1'>Em Desenvolvimento</h1>
        
        
    </Container>

    </>
  );
}

export default Example;
