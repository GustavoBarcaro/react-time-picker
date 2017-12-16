import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ValueOptions extends Component {
  setValue = value => this.props.setState({ value });

  onChange = (event) => {
    const { value } = event.target;

    this.setValue(value);
  }

  render() {
    const { value } = this.props;

    return (
      <fieldset id="detailoptions">
        <legend htmlFor="viewoptions">Set time externally</legend>

        <div>
          <label htmlFor="time">Time</label>
          <input
            id="time"
            onChange={this.onChange}
            type="time"
            value={value || ''}
          />&nbsp;
          <button onClick={() => this.setValue(null)}>Clear to null</button>
          <button onClick={() => this.setValue('')}>Clear to empty string</button>
        </div>
      </fieldset>
    );
  }
}

ValueOptions.propTypes = {
  setState: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
    PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  ]),
};
