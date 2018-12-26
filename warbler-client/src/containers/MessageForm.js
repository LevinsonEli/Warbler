import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewMessage } from "../store/actions/messages";

const MAX_MES_LENGTH = 240;

class MessageForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        message: "",
        maxLenthColor: "inherit"
      };
      
      this.handleChange = this.handleChange.bind(this);
      this.handleNewMessage = this.handleNewMessage.bind(this);
    }
  
    handleNewMessage = event => {
      event.preventDefault();
      this.props.postNewMessage(this.state.message);
      this.setState({ message: "" });
      this.props.history.push("/");
    };

    handleChange(e) {
      this.setState({ message: e.target.value.substring(0, MAX_MES_LENGTH) });
      if (e.target.value.length >= MAX_MES_LENGTH)
        this.setState({maxLenthColor: "red"});
      else
        this.setState({maxLenthColor: "inherit"});
    }
  
    render() {
      return (
        <div className="messageForm">
        <h2>Type your message</h2>
        <p style={{color: this.state.maxLenthColor}}>Max length 240 symbols. Yours: {this.state.message.length}</p>
          <form onSubmit={this.handleNewMessage}>
            {this.props.errors.message && (
              <div className="alert alert-danger">{this.props.errors.message}</div>
            )}
            <textarea
              type="text"
              className="form-control message"
              value={this.state.message}
              onChange={this.handleChange}
            ></textarea>
            <button type="submit" className="btn btn-success">
              Add my message!
            </button>
          </form>
        </div>
      );
    }
  }
  
  function mapStateToProps(state) {
    return {
      errors: state.errors
    };
  }
  
  export default connect(mapStateToProps, { postNewMessage })(MessageForm);