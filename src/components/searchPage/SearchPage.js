/*Component imports */
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button,Collapse, Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {useSelector,useDispatch}from 'react-redux'


/*functions import */
import axios from 'axios';


/*css imports */
import './SearchPage.css';

/*import imgs */


export default function SearchBar(){
    window.scrollTo(0, 0); 
    const dispatch_func = useDispatch();
    const store_data = useSelector(state => state)
    const [re_render, setre_render] = useState(0);
    

    


    return(
        <>

            
        </>
    );
}