import React, { Component } from "react";
import { connect } from "react-redux";

class Contact extends Component {
  state = {
    email: "",
    name: "",
    message: "",
    errorMessage: ""
  };

  handleSubmit = () => {
    const { email, name, message } = this.state;
    const { dispatch } = this.props;
    if (!email) {
      this.setState({ errorMessage: "Please fill out your email first." });
      return;
    }
    if (!name) {
      this.setState({ errorMessage: "Please fill out your name first." });
      return;
    }
    if (!message) {
      this.setState({ errorMessage: "Please type a message before sending." });
      return;
    }

    dispatch({ type: "SUBMIT_MESSAGE", email, name, message });
  };

  render() {
    const { email, name, message, errorMessage } = this.state;
    const { error, success, loading } = this.props;

    return (
      <div className="contact-container">
        <h2>Contact</h2>
        {error ||
          (errorMessage && (
            <h3 className="contact-error">
              {errorMessage || "Something went wrong! Please try again."}
            </h3>
          ))}
        {success && (
          <h3 className="contact-succes">Message sent successfully!</h3>
        )}
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <label className="contact-label" for="contact-email">
            Your Email Address
          </label>
          <input
            className="contact-input"
            type="text"
            placeholder="Your Email Address"
            id="contact-email"
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <label className="contact-label" for="contact-name">
            Your Name
          </label>
          <input
            className="contact-input"
            type="text"
            placeholder="Your Name"
            id="contact-name"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <label className="contact-label" for="contact-name">
            Your Message
          </label>
          <textarea
            className="contact-textarea"
            type="text"
            placeholder="Type your message here..."
            id="contact-name"
            value={message}
            rows="6"
            onChange={e => this.setState({ message: e.target.value })}
          />
          <button
            type="submit"
            className={`contact-button ${loading ? "loading-button" : ""}`}
          >
            {loading ? "..." : "Send Message"}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.contact.loading,
  error: state.contact.error,
  success: state.contact.success
});

export default connect(mapStateToProps)(Contact);
