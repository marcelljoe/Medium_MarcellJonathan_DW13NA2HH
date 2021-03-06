import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Form, Input, Grid, Image, Button, Header, Icon, Modal} from 'semantic-ui-react';
import './App.css';

const columns = _.times(16, (i) => (
    <Grid.Column key={i}>
    <Image src='/images/wireframe/image.png' />
    </Grid.Column>
))
const InputExampleInput = () => <Input placeholder=""/>

const GridExampleGrid = () => 
<Grid>{columns}</Grid>

class Registration extends Component{
    render(){
        return (
            <Modal trigger={<Button>Register</Button>} size="medium">
                
                <Grid columns={3} verticalAlign="top">
                    <Grid.Row>
                    <Grid.Column>
                        <Image floated="left" verticalAlign="top" src='https://miro.medium.com/max/214/1*MQH4A5bsyRz4AWh5V4IfvQ.png' />
                    </Grid.Column>
                    <Grid.Column width={5.7}>
                    <div>
                        <br/>
                        <h2 align="center">Join Medium.</h2>
                        <h4 align="center">
                        Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.
                        </h4>
                        <Form>
                        <Form.Field align="center">
                            <Input size="small" type="text" placeholder="Fullname" />
                            </Form.Field>
                        <Form.Field align="center">
                            <Input size="small" type="text" placeholder="Username" />
                        </Form.Field>
                        <Form.Field align="center">
                            <Input size="small" type="password" placeholder="Password" />
                        </Form.Field>
                        <Form.Field align="center">
                            <Button color="black" size="small">Register</Button>
                        </Form.Field>
                        <Form.Field align="center">
                            <h4>Already have an Account? <a href="###">Sign In</a></h4>
                            <h4>To make Medium work, we log user data and share it with service providers. Click “Sign Up” above to accept Medium’s<a href="###">Terms of Service</a>&<a href="###">Privacy Policy</a></h4>
                        </Form.Field>
                        </Form>
                    </div>
                    </Grid.Column>
                    <Grid.Column>
                        <Image floated="right" verticalAlign="top" src='https://miro.medium.com/max/214/1*lhbp8cxKdkDB-MgmwIPE5w.png' />
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Modal>

    );
    }
    }

    export default Registration;
