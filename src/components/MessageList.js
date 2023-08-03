import React from 'react';
import Message from './Message';

class MessageList extends React.Component {
    render() {
        return (
            <div>
                <h2>Messages</h2>
                {/* usiamo map per creare un nuovo array di Message, uno per ogni messaggio nella prop "messages" */}
                {this.props.messages.map((message, index) => (
                    // passiamo come props "sender" e "text" al componente Message
                    <Message key={index} sender={message.sender} text={message.text} timestamp={message.timestamp} />
                ))}
            </div>
        );
    }
}

export default MessageList;