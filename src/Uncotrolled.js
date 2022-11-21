/*
 * Blazingly fast, no react udpates
 * html standard
 *
 * Nobody knows html
 * onChange updates/validation
 * inconsistnce some of the inputs should be treated differently
 *
 * */

const Uncontrolled = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        console.log("Form values:", {
          name: event.target.name.value,
          email: event.target.email.value,
          agree: event.target.agree.checked, // why???
        });
      }}
    >
      <div>
        <label htmlFor="name">Enter your name: </label>
        <input type="text" name="name" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Enter your email: </label>
        <input type="email" name="email" id="email" required />
      </div>
      <div>
        <input type="checkbox" id="agree" name="agree" />
        <label htmlFor="agree">Agree</label>
      </div>
      <div>
        <input type="submit" value="Subscribe!" />
      </div>
    </form>
  );
};

export default Uncontrolled;
