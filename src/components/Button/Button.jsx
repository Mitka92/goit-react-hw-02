function Button({ name, dataName, onClick }) {
  return (
    <>
      {
        <button data-name={dataName} onClick={onClick}>
          {name}
        </button>
      }
    </>
  );
}

export default Button;
