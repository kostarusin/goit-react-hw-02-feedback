
import React, { Component } from 'react';

export class FeedbackOptions extends Component {
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.props.options;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.props.options;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  render() {
    const { options, onLeaveFeedback } = this.props;
    const { good, neutral, bad } = options;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <form className="formStyle">
        <input
          type="button"
          name="good"
          value="Good"
          className="inputStyle"
          onClick={onLeaveFeedback}
        />
        <input
          type="button"
          name="neutral"
          value="Neutral"
          className="inputStyle"
          onClick={onLeaveFeedback}
        />
        <input
          type="button"
          name="bad"
          value="Bad"
          className="inputStyle"
          onClick={onLeaveFeedback}
        />
      </form>
    );
  }
}
