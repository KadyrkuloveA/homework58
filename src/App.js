import React, {Component, Fragment} from 'react';
import './App.css';
import Modal from './components/UI/Modal/Modal';
import SwitchBtn from "./components/UI/SwitchBtn/SwitchBtn";
import Alert from "./components/UI/Alert/Alert";

class App extends Component {
    state = {
        types: ['danger', 'success', 'warning', 'primary'],
        displayModal: false,
        displayAlert: true,
    };
    openModal = () => {
        this.setState({displayModal: true});
    };
    closeModal = () => {
        this.setState({displayModal: false});
    };
    closeAlert = (type) => {
        let lol = this.state.types.findIndex(item => item === type);
        let copy = [...this.state.types];
        copy.splice(lol, 1);
        this.setState({types: copy, displayAlert: false});
    };
    someHandler = () => {};
    render() {
        return (
            <div className='App'>
                <SwitchBtn switch={this.openModal}>Open Modal</SwitchBtn>
                <Modal
                    show={this.state.displayModal}
                    close={this.closeModal}
                    title="Some kinda modal title"
                >
                    <p>This is modal content</p>
                </Modal>
                <Alert
                    show={this.state.displayAlert}
                    type="success"
                    dismiss={this.someHandler}
                    close={this.closeAlert}
                >This is a success type alert</Alert>
                <Alert
                    show={this.state.displayAlert}
                    type="danger"
                    close={this.closeAlert}
                >This is a danger type alert</Alert>
            </div>
        )
    }
}

export default App;
