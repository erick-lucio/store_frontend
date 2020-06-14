/*Component imports */
import React,{useState,useEffect} from 'react';

import { render } from 'react-dom';
import {Link,Redirect} from 'react-router-dom';
import {Button, Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Checkbox_end from '../material_ui/CheckBox';
import TextArea from '../material_ui/TextArea';
import {useSelector,useDispatch}from 'react-redux'


/*css imports */
import './Footer.css';

/* Img imports*/
import Instagram from '../../assets/imgs/Instagran_icon.png';

    export default function Footer() {
      const dispatch_func = useDispatch();
      const store_data = useSelector(state => state)


          
          
      
      return (
        <>
          <Container className="class_footer_root_container" fluid={true}>
              <Row className="class_footer_row1">
                  <Col md="12">
                    <h3>
                      Formas de Pagamentos
                    </h3>
                  </Col>
                  <Col md="1" className="class_footer_payment_methods">visa</Col>
                  <Col md="1" className="class_footer_payment_methods">master</Col>
                  <Col md="1" className="class_footer_payment_methods">boleto</Col>
                  <Col md="1" className="class_footer_payment_methods">visa</Col>
                  
              </Row>
              <Row className="class_footer_row2">
                <Col>
                   Pedro Leopoldo MG CEP 33600000  Rua .......
                </Col>
              </Row>
              <Row className="class_footer_row3">
                <Col>
                    Desenvolvido por <a href="#" target="_blank">Erick Dev</a> 2020
                </Col>
              </Row>
          </Container>
        </>
      )
 



    }

