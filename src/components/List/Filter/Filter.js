import React from 'react';

import './Filter.css'

export default class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.onAll = this.onAll.bind(this);
    this.onActive = this.onActive.bind(this);
    this.onCompleted = this.onCompleted.bind(this);
    this.onDelCompleted = this.onDelCompleted.bind(this);
  }

  onAll(e) {
    this.props.onAll(e);
  }
  
  onActive(e) {
    this.props.onActive(e);
  }
  
  onCompleted(e) {
    this.props.onCompleted(e);
  }

  onDelCompleted(e) {
    this.props.onDelCompleted(e)
  }

  render() {
    return (
      <section className={`filter filter-${this.props.filter}`}>
        <button className="filter-btn filter-btn-all" type="button" onClick={this.onAll}>All</button>
        <button className="filter-btn filter-btn-active" type="button" onClick={this.onActive}>Active</button>
        <button className="filter-btn filter-btn-completed" type="button" onClick={this.onCompleted}>Completed</button>
        <button className="filter-btn" type="button" onClick={this.onDelCompleted}>Del completed</button>
      </section>
    );
  }
}