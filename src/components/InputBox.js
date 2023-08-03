// Contiene l'input che l'utente andrà ad inserire. Passerà l'invio del messaggio come prop al componente "ChatRoom"

import React from 'react';

class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: '' };
    }

    // questo metodo aggiorna input value in base a ciò che l'utente inserisce
    handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    // richiama la prop sendMessage e pulisce l'input field quando l'utente submitta il form
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.sendMessage(this.state.inputValue);
        this.setState({ inputValue: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                />
                <button type="submit">Send</button>
            </form>
        );
    }
}

export default InputBox;