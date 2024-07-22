import './App.css';
import { useEffect, useState } from 'react';
import Description from './components/Description/Description';
import Section from './components/Section/Section';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedObject = window.localStorage.getItem('saved-feedbacks');
    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem('saved-feedbacks', JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback =
    feedback['good'] + feedback['neutral'] + feedback['bad'];

  const updateFeedback = feedbackType => {
    setFeedback(feedback => ({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Section>
        <Description />
        <Options
          callback={updateFeedback}
          totalFeedback={totalFeedback}
          reset={resetFeedback}
        />
        {!totalFeedback ? (
          <Notification />
        ) : (
          <Feedback obj={feedback} totalFeedback={totalFeedback} />
        )}
      </Section>
    </>
  );
}

export default App;
