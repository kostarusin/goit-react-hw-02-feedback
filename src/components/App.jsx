import React, { Component } from 'react';
import { SectionTitle } from './SectionTitle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };


  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <SectionTitle
          options={this.state}
          onLeaveFeedback={this.handleClick}
          total={total}
          positivePercentage={positivePercentage}
        />
      </>
    );
  }
}
