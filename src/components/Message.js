import React from 'react';

class Message extends React.Component {
    render() {
        const timestamp = new Date(this.props.timestamp);
        console.log(this.props.timestamp, timestamp);
        return (
            <div>
                <strong>{this.props.sender}</strong>: {this.props.text}
                <br />
                <small>{timestamp.toLocaleString()}</small>
            </div>
        );
    }
}

export default Message;
