import React from 'react';
import Layout from '../../components/Layout';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
* @author SakibAlamin
* @function Signup
**/

const Signup = (props) => {
  const auth = useSelector(state => state.auth);
  if (auth.authenticate) {
    return <Redirect to={`/`}/>
  }
  return(
    <Layout> 
        <Container> 
            <Row style={{marginTop: '50px'}}> 
                <Col md={{span: 6, offset: 3}}> 
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Input 
                                    label="First Name"
                                    placeholder="First Name"
                                    value=""
                                    type="text"
                                    onChange={() => {}}
                                />
                            </Col>
                            <Col md={6}>
                                <Input 
                                    label="Last Name"
                                    placeholder="Last Name"
                                    value=""
                                    type="text"
                                    onChange={() => {}}
                                />
                            </Col>
                        </Row>
                        <Input 
                            label="Email"
                            placeholder="Email"
                            value=""
                            type="email"
                            onChange={() => {}}
                        />

                        <Input 
                            label="Password"
                            placeholder="Password"
                            value=""
                            type="password"
                            onChange={() => {}}
                        />
                        <Button variant="primary btn-block" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </Layout>
   )
 };

export default Signup;