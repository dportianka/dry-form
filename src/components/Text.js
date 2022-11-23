const Text = ({ value, onChange, label, ...rest }) => {
  return (
    <div>
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
