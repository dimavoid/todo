import React from 'react';
import Textarea from 'react-autosize-textarea';

import './Form.css';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(e);
  }

  handleClick(e) {
    this.props.onClick(e)
  }

  handleChange(e) {
    this.props.onChange(e);
  }

  handleKeyDown(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      this.props.onSubmit(e);
    }
  }

  render() {
    const classFormType = (this.props.type === 'task') ? 'form-type' : 'form-type form-type--note';

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <button className={classFormType} type="button" onClick={this.handleClick}>Note:</button>
        <Textarea className="form-textarea" value={this.props.text} onChange={this.handleChange} onKeyDown={this.handleKeyDown} autoFocus/>
        <button className="form-button">Add {this.props.type}</button>
      </form>
    );
  }
}