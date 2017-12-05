import React from 'react';
import Textarea from 'react-autosize-textarea';

import './Form.css';

export default class Form extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const text = this.props.text.replace(/ +/g, ' ').replace(/\n+/g, '\n');
    
    if (text.trim()) {
      if (this.props.type === 'task') this.props.addTask(text);
      if (this.props.type === 'note') this.props.addNote(text);
    };

    this.props.addText('');
  }

  handleChange = (e) => {
    this.props.addText(e.target.value);
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      this.handleSubmit(e);
    }
  }

  handleClick = (e) => {
    const type = (this.props.type === 'task') ? 'note' : 'task';

    this.props.toggleForm(type);
  } 

  render() {
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <button
          className={`Form__type Form__type--${this.props.type}`}
          type="button"
          onClick={this.handleClick}
        >
          Note
        </button>
        <Textarea
          className="Form__textarea"
          value={this.props.text}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <button className="Form__button">Add {this.props.type}</button>
      </form>
    );
  }
}