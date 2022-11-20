import "./App.css";

function App() {
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("event", event.target[0].value);
        }}
      >
        <label htmlFor="fname">First name:</label>
        <input type="text" id="fname" name="fname" />
        <br />
        <br />
        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" name="lname" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
