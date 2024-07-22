import clsx from 'clsx';
import css from './Feedback.module.css';

function Feedback({ feedback, totalFeedback }) {
  const { good, neutral, bad } = feedback;
  return (
    <ul className={clsx(css['feedback-list'])}>
      <li className={clsx(css['feedback-item'])}>
        <p className={clsx(css['feedback-text'])}>Good: {good}</p>
      </li>
      <li className={clsx(css['feedback-item'])}>
        <p className={clsx(css['feedback-text'])}>Neutral: {neutral}</p>
      </li>
      <li className={clsx(css['feedback-item'])}>
        <p className={clsx(css['feedback-text'])}>Bad: {bad}</p>
      </li>
      <li className={clsx(css['feedback-item'])}>
        <p className={clsx(css['feedback-text'])}>Total: {totalFeedback}</p>
      </li>
      <li className={clsx(css['feedback-item'])}>
        <p className={clsx(css['feedback-text'])}>
          Positive: {Math.round((good / totalFeedback) * 100)}%
        </p>
      </li>
    </ul>
  );
}

export default Feedback;
