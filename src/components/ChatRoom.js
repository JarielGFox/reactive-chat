// componente principale dell'app, ne gestirà gli stati ad esempio user e messaggi

import React from 'react';
import MessageList from './MessageList';
import InputBox from './InputBox';

// quando un componente è definito come classe estende "React.Component" ereditandone proprietà e metodi
class ChatRoom extends React.Component {
    constructor(props) {
        //si fa riferimento al costruttore della classe padre, ossia "Ract.Component"
        super(props);
        this.state = {
            // se c'è già un username nel localstorage prende quello
            username: localStorage.getItem('username') || '',
            messages: []
        };
    }

    // aggiorna lo stato di "usernameInput" quando l'utente cambia il nome utente
    handleUsernameChange = (event) => {
        // this si riferisce al componente ChatRoom
        this.setState({ usernameInput: event.target.value });
    }

    // aggiorna lo stato di usernameInput nel localstorage
    handleUsernameSubmit = (event) => {
        event.preventDefault();
        // this si riferisce al componente ChatRoom
        this.setState({ username: this.state.usernameInput });
        localStorage.setItem('username', this.state.usernameInput);
    }

    sendMessage = (text) => {
        const message = {
            sender: this.state.username,
            text: text,
            timestamp: new Date().toISOString()
        };
        console.log(message);
        this.setState({
            messages: [...this.state.messages, message]
        });
    }


    render() {
        if (!this.state.username) {
            return (
                <div>
                    <h1>Chat Room</h1>
                    <form onSubmit={this.handleUsernameSubmit}>
                        <input
                            type="text"
                            placeholder="Enter your username..."
                            value={this.state.usernameInput}
                            //richiama il metodo per il cambio user
                            onChange={this.handleUsernameChange}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            );
        }

        return (
            <div>
                <h1>Chat Room</h1>
                <MessageList messages={this.state.messages} />
                <InputBox sendMessage={this.sendMessage} />
            </div>
        );
    }

}

export default ChatRoom;