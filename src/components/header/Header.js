/*Component imports */
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button,Collapse, Container, Row, Col, Form, FormGroup, Label, Input, FormText,Dropdown, DropdownMenu, DropdownToggle ,DropdownItem  } from 'reactstrap';
import {useSelector,useDispatch}from 'react-redux'


/*functions import */
import axios from 'axios';


/*css imports */
import './Header.css';

/*import imgs */
import store_icon from '../../assets/imgs/img_store.png';
import search_icon from '../../assets/imgs/img_icon_search.png';

export default function Header(){
    const dispatch_func = useDispatch();
    const store_data = useSelector(state => state)
    const [re_render, setre_render] = useState(0);
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);
    const [dropdown4, setDropdown4] = useState(false);
    const [dropdown5, setDropdown5] = useState(false);
    const [dropdown6, setDropdown6] = useState(false);
    const [dropdown7, setDropdown7] = useState(false);
    const [dropdown8, setDropdown8] = useState(false);

    const toggle1 = () => setDropdown1(prevState => !prevState);
    const toggle2 = () => setDropdown2(prevState => !prevState);
    const toggle3 = () => setDropdown3(prevState => !prevState);
    const toggle4 = () => setDropdown4(prevState => !prevState);
    const toggle5 = () => setDropdown5(prevState => !prevState);
    const toggle6 = () => setDropdown6(prevState => !prevState);
    const toggle7 = () => setDropdown7(prevState => !prevState);
    const toggle8 = () => setDropdown8(prevState => !prevState);

    function search_itens(){
        let keyWords = "";
        //let search_list = 

    }
    
    function open_sidebar() {

    }
    
    function close_sidebar() {

    }
    function t1(){
        dispatch_func({
            type:'ADD_ITEN_',    
            //iten_id:count do json        
          })
          console.log(store_data)
          //var myObject = JSON.parse(myjsonstring);
    }
    useEffect(() => {
    
    setre_render(!re_render);
    }, []);
    return(
        <>
            <Container fluid={true} className="class_header_root_container">
                <Row className="class_header_row_logo_search_bar">
                    <Col md="2">
                        <Link to="/">                       
                            <img src={store_icon} className="class_header_store_icon"></img>
                        </Link>
                    </Col>
                    <Col md="10" className="class_header_col_search">
                        <Input placeholder="Precisa de algo?" className="class_header_search_input"></Input>
                        <img className="class_header_img_search" src={search_icon} onClick={()=>alert("pesquisar")}></img>
                    </Col>
                </Row>
                <Row className="class_header_row_categorys d-none d-md-flex">
                    <Col md="1" className="class_header_col_dropdown_md">
                        <Dropdown isOpen={dropdown1} toggle={toggle1}>
                            <DropdownToggle caret className="class_header_dropdown_btn">
                                Maculino
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col md="1" className="class_header_col_dropdown_md">
                        <Dropdown isOpen={dropdown2} toggle={toggle2}>
                            <DropdownToggle caret className="class_header_dropdown_btn">
                                Maculino
                            </DropdownToggle>
                            <DropdownMenu>
                            <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col md="1" className="class_header_col_dropdown_md">
                        <Dropdown isOpen={dropdown3} toggle={toggle3}>
                            <DropdownToggle caret className="class_header_dropdown_btn">
                                Maculino
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col md="1" className="class_header_col_dropdown_md">
                        <Dropdown isOpen={dropdown4} toggle={toggle4}>
                            <DropdownToggle caret className="class_header_dropdown_btn">
                                Maculino
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col md="1" className="class_header_col_dropdown_md">
                        <Dropdown isOpen={dropdown5} toggle={toggle5}>
                            <DropdownToggle caret className="class_header_dropdown_btn">
                                Maculino
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col md="1" className="class_header_col_dropdown_md">
                        <Dropdown isOpen={dropdown6} toggle={toggle6}>
                            <DropdownToggle caret className="class_header_dropdown_btn">
                                Maculino
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col md="1" className="class_header_col_dropdown_md">
                        <Dropdown isOpen={dropdown7} toggle={toggle7}>
                            <DropdownToggle caret className="class_header_dropdown_btn">
                                Maculino
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col md="1" className="class_header_col_dropdown_md">
                        <Dropdown isOpen={dropdown8} toggle={toggle8}>
                            <DropdownToggle caret className="class_header_dropdown_btn">
                                Maculino
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                                <DropdownItem>Item</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    
                </Row>
            </Container>
            
        </>
    );
}