import clsx from 'clsx';
import css from './Feedback.module.css';

function Feedback({ feedback, totalFeedback }) {
  const { good, neutral, bad } = feedback;
  const positive = Math.round((good / totalFeedback) * 100);
  return (
    <ul
      className={clsx(css['feedback-list'], {
        [css['reset-active']]: totalFeedback > 0,
      })}
    >
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
      <li
        className={clsx(css['feedback-item'])}
        style={{
          background: `linear-gradient(to right, rgba(0, 122, 90, 0.85) ${positive}%, rgba(184, 41, 22, 0.85) ${positive}%)`,
        }}
      >
        <p className={clsx(css['feedback-text'])}>Positive: {positive}%</p>
      </li>
    </ul>
  );
}

export default Feedback;
