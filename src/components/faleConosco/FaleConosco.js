/*Component imports */
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button,Collapse, Container, Row, Col, Form, FormGroup, Label, Input, FormText,Dropdown, DropdownMenu, DropdownToggle ,DropdownItem  } from 'reactstrap';
import {useSelector,useDispatch}from 'react-redux'


/*functions import */
import axios from 'axios';


/*css imports */
import './FaleConosco.css';

/*import imgs */
import img_whatsapp from '../../assets/imgs/img_whatsapp_icon.png';
import img_icon_messages from '../../assets/imgs/img_icon_message.png';

export default function FaleConosco(){
    function toggleWhats() {
        var row = document.getElementById("id_faleconosco_root_row");
        if (row.style.display === "none") {
            row.style.display = "block";
            row.style.display = "block";
            row.style.height = "auto"
        } else {
            row.style.display = "none";
            row.style.height = "0"
        }
      } 
    return(
        <>
            <Container className="class_faleconosco_root_container">
                   <Row className="class_faleconosco_row_toggle">
                       <Col className="class_faleconosco_row_toggle"    >
                            <Button className="class_faleconosco_toggle_button" onClick={()=>toggleWhats()}>
                                 <img src={img_icon_messages} className="class_faleconosco_message_icon"></img>
                            </Button>
                       </Col>
                      
                    </Row> 
                   
                    <Row className="class_faleconosco_root_row" id="id_faleconosco_root_row" style={{display: "none"}}>
                            <Col className="class_faleconosco_col_whats">
                            <a href="https://api.whatsapp.com/send?phone=5531999986918&text=Ola%20Vim%20atraves%20do%20site%2CGostaria%20de%20conhecer%20melhor%20seus%20produtos." target="_blank">
                                 <span>Fale Conosco</span>
                            
                                <img className="class_faleconosco_img_whats" src={img_whatsapp}></img>
                            </a>  

                           
                            </Col>                   
                    </Row>
               
            </Container>
        </>
    )

}