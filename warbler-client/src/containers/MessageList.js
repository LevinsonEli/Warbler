import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages, removeMessage } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";

class MessageList extends Component {
    componentDidMount() {
        this.props.fetchMessages();
    }
    render() {
        const { messages, removeMessage, currentUser } = this.props;
        var messageList = messages.map(m => (
            <MessageItem 
                key={m._id} 
                date={m.createdAt}
                text={m.text}
                username={m.user.username}
                profileImageUrl={m.user.profileImageUrl}
                removeMessage={removeMessage.bind(this, m.user._id, m._id)}
                isCorrectUser={currentUser === m.user._id}
            />
        ));
        return (
            <div className="messageList">
                    <ul className="list-group" id="messages">
                        {messageList}
                    </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages,
        currentUser: state.currentUser.user.id
    };
};

export default connect(mapStateToProps, { fetchMessages, removeMessage})(MessageList);
