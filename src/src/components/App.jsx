import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { SectionFeedback } from './Section/Section';

// const options = [
//   { title: 'Good', name: 'good' },
//   { title: 'Neutral', name: 'neutral' },
//   { title: 'Bad', name: 'bad' },
// ];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChange = event => {
    const { name } = event.target;

    this.setState(state => {
      return { [name]: state[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.ceil((this.state.good / this.countTotalFeedback()) * 100);
  };
  render() {
    return (
      <div>
        <SectionFeedback title="Please leave feedback">
          <FeedbackOptions
            arrayState={this.state}
            // options={options}
            onLeaveFeedback={this.handleChange}
          />
        </SectionFeedback>
        <SectionFeedback title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </SectionFeedback>
      </div>
    );
  }
}
