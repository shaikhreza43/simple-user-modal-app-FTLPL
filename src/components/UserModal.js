import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

class UserModal extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        let activity_periods = this.props.userDetails.activity_periods;

        return (

            <>
                <Modal isOpen={this.props.openModal} toggle={this.props.closeModal}>
                    <ModalHeader toggle={this.props.closeModal}><h6>{this.props.userDetails.real_name}</h6> Activity Details</ModalHeader>
                    <ModalBody>

                        <p className="text-center font-weight-bold">{this.props.userDetails.real_name}</p>
                        <Calendar
                            localizer={localizer}
                            events={activity_periods}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: 500 }}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.props.closeModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>

        )
    }
}

export default UserModal;