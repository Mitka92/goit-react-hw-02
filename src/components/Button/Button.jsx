import clsx from 'clsx';
import css from './Button.module.css';

function Button({ name, dataName, onClick }) {
  return (
    <>
      <button
        className={clsx(css['button'], css[dataName])}
        data-name={dataName}
        onClick={onClick}
      >
        {name}
      </button>
    </>
  );
}

export default Button;
