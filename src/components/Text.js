const Text = ({ value, onChange, label, classname, ...rest }) => {
  return (
    <div className={classname}>
      <label>
        {label}:
        <input
          type="text"
          value={value || ""}
          onChange={(event) => {
            onChange(event.target.value, event);
          }}
          {...rest}
        />
      </label>
    </div>
  );
};

export default Text;
