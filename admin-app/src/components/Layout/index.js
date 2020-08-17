import React from 'react'
import Header from '../Header';
import { Container } from 'react-bootstrap';
/**
* @author SakibAlamin
* @function Layout
**/

const Layout = (props) => {
  return(
    <>
        <Header /> 
        {props.children}
    </>
   )

 }

export default Layout;