import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class UserModal extends Component{

    constructor(props){
        super(props);
        this.state={
            ...this.props
        }
    }

    render(){
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
            <ModalHeader toggle={this.props.onClick}>Selected User Activity Details</ModalHeader>
            <ModalBody>{this.props.userDetails[0]}</ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={this.props.onClick}>Cancel</Button>
            </ModalFooter>
        </Modal>
        )
    }
}

export default UserModal;