import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { SectionFeedback } from './Section/Section';
import css from './App.module.css';

// const options = [
//   { title: 'Good', name: 'good' },
//   { title: 'Neutral', name: 'neutral' },
//   { title: 'Bad', name: 'bad' },
// ];

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
const options = ['good', 'neutral', 'bad'];
export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChange = e => {
    switch (e.target.name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  // const { name } = event.target;

  //   this.setState(state => {
  //     return { [name]: state[name] + 1 };
  //   });
  // };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((good / countTotalFeedback()) * 100);
  };

  return (
    <div className={css.form}>
      <SectionFeedback title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleChange} />
      </SectionFeedback>
      <SectionFeedback title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </SectionFeedback>
    </div>
  );
}
