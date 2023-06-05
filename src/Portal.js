import React, { Component } from 'react'
import {createPortal} from 'react-dom'
import { Container } from 'react-bootstrap';
import './App.css';

class Form extends Component {
    state = {
        message: false,
    }
    componentDidMount() {
        setTimeout(this.handleClick, 3000)
    }
    handleClick = () => {
        this.setState(({ message }) => ({
            message: !message //create toggle
        }))
    }
    render() {
        return (
            <Container>
                <form className="w-50 border mt-5 p-3 m-auto" 
                    style={{ 'overflow': 'hidden' }}
                    onClick={this.handleClick}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input  type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    {this.state.message ?   <PortalForMessage>
                                                <Message />
                                            </PortalForMessage> : null}
                </form>
            </Container>
        )
    }
}
const PortalForMessage = (props) => {
    const container = document.createElement("div")
    document.body.append(container)
    return createPortal(props.children, container)
}
const Message = () => {
    return (
        <div className='divRemove'
            style={{'width': '500px', 
                    'height': '150px', 
                    'backgroundColor': 'red', 
                    'position': 'absolute', 
                    'left': '0', 
                    'bottom': '0'}}>
                Hello
        </div>
    )
}

function Portal() {
    return (
        <Form/>
    );
}

export default Portal;
