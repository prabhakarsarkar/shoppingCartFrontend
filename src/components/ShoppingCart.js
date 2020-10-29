import React, { Component } from 'react';

import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


import { connect } from 'react-redux';
import { getItem, deleteItem } from "../Actions/ItemAction";
import PropsTypes from 'prop-types'


class ShoppingCart extends Component {

    componentDidMount() {
        this.props.getItem();
    }

    onDeleteClick = id => {
        this.props.deleteItem(id);
    }

    render() {
        const { item } = this.props.item
        return (
            <div>
                <Container style={{height:"1000px"}}>
                    <ListGroup >
                        <TransitionGroup className="shooping_cart">
                            {item.map(({ _id, name }) => (
                                <CSSTransition key={_id} timeout={500} className="dark">
                                    <ListGroupItem style={{ backgroundColor: "", color: "red" }}>
                                        <Button className="remove-btn" style={{ backgroundColor: "red", marginRight: "30px" }} size="sm"
                                            onClick={this.onDeleteClick.bind(this,_id)}>
                                            delete</Button>
                                        {name}

                                    </ListGroupItem>

                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ListGroup>

                </Container>
            </div>
        )
    }
}

ShoppingCart.propsTypes = {
    getItem: PropsTypes.func.isRequired,
    item: PropsTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { getItem, deleteItem })(ShoppingCart);
