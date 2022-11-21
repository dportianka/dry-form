import { useState } from "react";

/*
 * fully controlled by us, we can apply onChange
 *
 * updates
 *
 * https://reactnative.dev/docs/textinput#value
 *
 * */

const Controlled = () => {
  const [formValue, setFormValue] = useState({});

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        console.log("Form value", formValue);
      }}
    >
      <div>
        <label htmlFor="name">Enter your name: </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={formValue.name}
          onChange={(event) => {
            setFormValue((oldValue) => ({
              ...oldValue,
              name: event.target.value,
            }));
          }}
        />
      </div>
      <div>
        <label htmlFor="email">Enter your email: </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={formValue.email}
          onChange={(event) => {
            setFormValue((oldValue) => ({
              ...oldValue,
              email: event.target.value,
            }));
          }}
        />
      </div>
      <div>
        <label htmlFor="agree">Agree</label>
        <input
          type="checkbox"
          id="agree"
          name="agree"
          value={formValue.agree}
          onChange={(event) => {
            setFormValue((oldValue) => ({
              ...oldValue,
              agree: event.target.checked,
            }));
          }}
        />
      </div>
      <div>
        <input type="submit" value="Subscribe!" />
      </div>
    </form>
  );
};

export default Controlled;
