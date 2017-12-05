import React from 'react';

import './Filter.css';

class Filter extends React.Component {
  handleClick = (e) => {
    this.props.setFilter(e);
  }

  handleDelCompleted =(e) => {
    this.props.delCompleted(e);
  }

  render() {
    return (
      <section className={`Filter Filter--${this.props.filter}`}>
        <button className="Filter__btn" id="all" onClick={this.handleClick}>All</button>
        <button className="Filter__btn" id="active" onClick={this.handleClick}>Active</button>
        <button className="Filter__btn" id="completed" onClick={this.handleClick}>Compledet</button>
        {/* <button className="Filter__btn" onClick={this.handleDelCompleted}>Clear</button> */}
      </section>
    );
  }
}

export default Filter;