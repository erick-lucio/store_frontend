/*Component imports */
import React,{useState} from 'react';
import { useParams} from "react-router";
import {Link} from 'react-router-dom';
import {Button, Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import jsonteste from '../../ServerJsonStore';

/*functions import */
import axios from 'axios';
import { useCookies } from 'react-cookie';

/*css imports */
import './ProductPage.css';

/* import urls*/


/*import imgs */
import img_box from '../../assets/imgs/img_box_exp.png'

export default function ProductPage(){
    window.scrollTo(0, 0); 
    let { id } = useParams();
    const itens = [{img_ulr:img_box,product_tittle:"Caixa de po",product_description:"Caixa pra vc guardar seus bang",product_price:"56,96",product_id:1}]
    return(
        <>
            <Container className="class_productpage_root_container">
                <Row className="class_productpage_firstrow">
                    <Col md="5">
                        <img src={itens[0].img_ulr} className="class_productpage_main_img"></img>
                    </Col>
                    <Col md="7">
                        <h3>{itens[0].product_tittle}</h3>
                        <h4>{itens[0].product_description}</h4>
                        <h3>{itens[0].product_price}</h3>
                    </Col>
                </Row>
            </Container>
        </>
    )
}