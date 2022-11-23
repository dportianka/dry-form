import { useEffect, useState } from "react";

import TypeComponentMapping from "./TypeComponentMapping";

const ObjectForm = ({ name: objectName, fields, value, onChange }) => {
  const [objects, setObjects] = useState(null);

  useEffect(() => {
    fetch("/objects.json")
      .then((response) => {
        return response.json();
      })
      .then((val) => {
        setObjects(val);
      });
  }, []);

  if (!objects) {
    return null;
  }

  const onFieldChange = (newFieldValue, event) => {
    onChange({
      ...(value || {}),
      [event.target.name]: newFieldValue,
    });
  };

  return (
    <div>
      {fields.map(({ name: fieldName, ...userProps }) => {
        const { type, ...rest } = objects[objectName].fields[fieldName];

        const Component = TypeComponentMapping[type];

        return (
          <Component
            {...rest}
            {...userProps}
            key={fieldName}
            name={fieldName}
            value={value ? value[fieldName] : undefined}
            onChange={onFieldChange}
          />
        );
      })}
    </div>
  );
};
export default ObjectForm;
