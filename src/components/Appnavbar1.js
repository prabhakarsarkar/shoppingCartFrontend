import React, { Component } from 'react'
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container
} from 'reactstrap';


class APPbar extends Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <div>
                <Navbar color="dark" dark  className="mb-5" >
                    <Container style={{width:"100%"}}>
                        <NavbarBrand href="/"> shopping_cart</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/prabhakarsarkar"> github</NavLink>
                                </NavItem>
                            </Nav>

                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default APPbar;