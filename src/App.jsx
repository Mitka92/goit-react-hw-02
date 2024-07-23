import './App.css';
import { useEffect, useState } from 'react';
import Description from './components/Description/Description';
import Section from './components/Section/Section';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem('saved-feedback');
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem('saved-feedback', JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback =
    feedback['good'] + feedback['neutral'] + feedback['bad'];

  const positiveFeedback = Math.round((feedback['good'] / totalFeedback) * 100);

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
        <div className="feedback">
          <Description />
          <Options
            callback={updateFeedback}
            totalFeedback={totalFeedback}
            reset={resetFeedback}
          />
          {!totalFeedback ? (
            <Notification />
          ) : (
            <Feedback
              feedback={feedback}
              totalFeedback={totalFeedback}
              positiveFeedback={positiveFeedback}
            />
          )}
        </div>
      </Section>
    </>
  );
}

export default App;
