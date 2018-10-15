import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import Main from "./Drawer";

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar className="navbar">
                    <Navbar.Header>
                        <Navbar.Brand>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Text>
                            Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
                        </Navbar.Text>
                        <Navbar.Text pullRight>Have a great day!</Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;