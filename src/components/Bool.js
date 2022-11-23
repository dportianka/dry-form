import Text from "./Text";
const Bool = (props) => {
  return (
    <Text
      {...props}
      type="checkbox"
      onChange={(_value, event) => {
        props.onChange(!!event.target.checked, event);
      }}
    />
  );
};

export default Bool;
