import React from 'react';
import logo from './images/Podnet.png';
import './Sidebar.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Sidebar.css';
import InputGroup from 'react-bootstrap/InputGroup'

class SidebarContents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Tony Stark',
            password: 'IamIronMan'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div className="col">
                <div className="row-md">
                    <img src={logo} alt="logo" class="logo-opacity1" />
                    <p class="font-color"> Where world talks!! About Anything And Everything!</p>
                </div>
                <div className="row-md">
                    <Form>
                        <div className="row">
                            <Form.Group controlId="validationCustom01" className="col" >
                                <Form.Label style={{ color: 'white' }}>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    defaultValue="Mark"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="validationCustom02" className="col">
                                <Form.Label style={{ color: 'white' }}>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                    defaultValue="Otto"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <Form.Group controlId="validationCustomUsername">
                            <Form.Label style={{ color: 'white' }}>Username</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
            </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{ color: 'white' }}>Email address:</Form.Label>
                            <Form.Control type="email" placeholder="Enter email, e.g. TonyStark@gmail.com" />
                            <Form.Text className="text-muted" style={{ color: 'white' }}>
                                We're rude after you Sign-Up.
    </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label style={{ color: 'white' }} >Password</Form.Label>
                            <Form.Control type="password" placeholder="Password, e.g. IamIronMan" />
                        </Form.Group>
                        <Button variant="outline-primary" type="submit" style={{ margin: '20px' }}>
                            Submit
  </Button>

                    </Form>
                </div>
            </div>
        )
    }
}

export default SidebarContents;

