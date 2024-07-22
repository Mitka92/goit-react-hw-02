function Feedback({ obj, totalFeedback }) {
  return (
    <ul>
      <li>
        <p>Good: {obj.good}</p>
      </li>
      <li>
        <p>Neutral: {obj.neutral}</p>
      </li>
      <li>
        <p>Bad: {obj.bad}</p>
      </li>
      <li>
        <p>Total: {totalFeedback}</p>
      </li>
      <li>
        <p>Positive: {Math.round((obj.good / totalFeedback) * 100)}%</p>
      </li>
    </ul>
  );
}

export default Feedback;
