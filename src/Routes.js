/*Component imports */
import React,{useState} from 'react';
import {BrowserRouter,Switch,Route,MemoryRouter} from 'react-router-dom';


import {createBrowserHistory} from 'history';

import PageNotFound from './components/404Page/Page404';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainPage from './components/mainPage/MainPage';
import AdminPage from './components/admin/AdminPanel';
import FaleConosco from './components/faleConosco/FaleConosco';
import ProductPage from './components/product/ProductPage';
import CategoryProducts from './components/category/CategoryProducts';
import SearchBar from './components/searchPage/SearchPage';
/*css imports */
import './index.css';

/*functions import */
import store from './store/index';
import { Provider } from 'react-redux'

export default function Routes(){
    const [] = useState([])
    const history = createBrowserHistory();
   // window.location.pathname= "/";
   // console.log()

    return(
        <Provider store={store}>
            <BrowserRouter history={history} basename="/">     

            <Header/>
            <Switch>
                <Route exact path="/admin" component={AdminPage}/>          
                <Route exact path="/" component={MainPage}/>   
                <Route exact path="/product/:id" component={ProductPage} />
                <Route exact path="/category/:id" component={CategoryProducts}/> 
                <Route exact path="/search/:id" component={SearchBar}/> 
                
                
                
   
                <Route component={PageNotFound}/>
            </Switch>
            <Footer/>
            <FaleConosco/>
            
            
            
            
            
            
            </BrowserRouter>     
        </Provider>                  
         );
  
}