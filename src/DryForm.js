import { useState } from "react";
import ObjectForm from "./ObjectForm";

const DryForm = () => {
  const [formValue, setFormValue] = useState();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log("formvalue", formValue);
      }}
    >
      <ObjectForm
        value={formValue}
        onChange={setFormValue}
        name="User"
        fields={[
          {
            name: "name",
            required: true,
          },
          {
            name: "email",
            required: true,
          },
          {
            name: "agree",
          },
        ]}
      />
      <div>
        <input type="submit" value="Subscribe!" />
      </div>
    </form>
  );
};

export default DryForm;
