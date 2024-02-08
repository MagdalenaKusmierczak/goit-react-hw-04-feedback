import { useState } from 'react';
import Statistics from './Statistics/Statistics.jsx';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Section from './Section/Section.jsx';
import Notification from './Notification/Notification.jsx';

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const feedbackOptions = { good, neutral, bad };
  const totalFeedback = good + bad + neutral;
  const positivePercentage = Math.round((100 * good) / (good + bad + neutral));

  const onLeaveFeedback = evt => {
    switch (evt.target.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      default:
        break;
    }
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={feedbackOptions}
        onLeaveFeedback={onLeaveFeedback}
      ></FeedbackOptions>
      {totalFeedback === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        ></Statistics>
      )}
    </Section>
  );
};
export default App;
