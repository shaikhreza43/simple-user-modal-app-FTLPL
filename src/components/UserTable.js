import React, { Component } from 'react';
import UserModal from './UserModal';

class UserTable extends UserModal {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            showModal: false,
            temp: {
                id: null
            }
        }
    }

    getUserDetailsFromMockApi = () => {
        fetch('https://79a4a7a3-1373-4441-9fea-2a4b9ca78214.mock.pstmn.io/users', { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                this.setState({ users: data.members })
            });
    }

    componentDidMount() {
        this.getUserDetailsFromMockApi();
    }

    toggleModal = (id) => {
        debugger;
        if (this.state.showModal === false)
            this.setState({ showModal: true });
        else if (this.state.showModal === true)
            this.setState({ showModal: false });

      this.showSelectedUserActivity(id);
    }

    renderTd = () => {
        let tdDiv = this.state.users.map((user, index) => {
            return (
                <tr key={index}>
                    <td>{user.id}</td>
                    <td><a href="#" onClick={() => { this.toggleModal(user.id); this.state.temp.id = user.id }}>{user.real_name}</a></td>
                    <td>{user.tz}</td>
                </tr>
            )
        });

        return tdDiv;
    }

    showSelectedUserActivity = (id) => {
        debugger;

        let userDetails = this.state.users.filter((user) => id === user.id);

        // return (
        // <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
        //     <ModalHeader toggle={this.toggleModal}>Selected User Activity Details</ModalHeader>
        //     <ModalBody>{userDetails[0]}</ModalBody>
        //     <ModalFooter>
        //         <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
        //     </ModalFooter>
        // </Modal>
        // )

        return <UserModal
            isOpen={this.state.showModal}
            toggle={this.toggleModal}
            userDetails={userDetails}
            onClick={this.toggleModal}
        />
    }

    render() {
       
         let userId = this.state.users.map((user, index) => user.id);

        return (
            <>
                <div className="main-div container">
                    <h2 className="text-center">User Details</h2>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Time Zone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTd()}
                        </tbody>
                    </table>

                </div>

                {this.showSelectedUserActivity(userId)}

            </>
        )

    }
}
export default UserTable;