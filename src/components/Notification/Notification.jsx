import clsx from 'clsx';
import css from './Notification.module.css';

function Notification() {
  return <p className={clsx(css['notification'])}>No feedback yet</p>;
}

export default Notification;
