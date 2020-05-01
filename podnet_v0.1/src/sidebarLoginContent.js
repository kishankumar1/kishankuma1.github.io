import React from 'react';
import logo from './images/Podnet1.png';
import './Sidebar.css';
import { withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Sidebar.css';
import facebook from './images/facebook.svg';
import instagram from './images/instagram.svg';
import linkedin from './images/linkedin.svg'

class SidebarLoginContents extends React.Component {
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

    nextPath(path) {
        this.props.history.push(path);
      }

    render() {
        return (
            <div className="col">
                <div classname="row-md">
                    <img src={logo} alt="logo" class="logo-opacity" activeStyle={{ opacity: '1' }} />
                </div>
                <div classname="row-md">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{ color: 'white' }}>Email address:</Form.Label>
                            <Form.Control type="email" placeholder="Enter email, e.g. TonyStark@gmail.com" />
                            <Form.Text className="text-muted" style={{ color: 'white' }}>
                                We'll share your email with everyone else if you believe Tony Stark will use Gmail, otherwise you're safe with us.
    </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label style={{ color: 'white' }} >Password</Form.Label>
                            <Form.Control type="password" placeholder="Password, e.g. IamIronMan" />
                        </Form.Group>
                        <Button variant="outline-primary" type="submit" style={{ margin: '10px' }}>
                            Submit
  </Button>

                    </Form>
                    <p>OR</p>
                </div>
                <div className="row" class="middle-button">
                    <Button variant="outline-light" type="submit" onClick={() => this.nextPath('./signUp')}>
                        Sign-up
                        </Button>
                </div>

                <div classname="row">
                    <a href="https://www.facebook.com/podnets"><img src={facebook} alt="facebook" style={{ marginTop: '30px', marginLeft: '30px', marginRight: '30px' }} /></a>
                    <img src={instagram} alt="Instagram" style={{ marginTop: '30px', marginLeft: '30px', marginRight: '30px' }} />
                    <a href="https://www.linkedin.com/company/podnets/"><img src={linkedin} alt="Linkedin" style={{ marginTop: '30px', marginLeft: '30px', marginRight: '30px' }} /></a>
                </div>
            </div>
        )
    }
}

export default withRouter(SidebarLoginContents);

