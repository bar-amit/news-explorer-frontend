import { useState } from "react";

function initialValues(i) {
  let values = {};
  for (let count = 0; count < i.length; count++) values[i[count]] = "";
  return values;
}

function useForm({ inputs = [] }) {
  const [values, setValues] = useState(initialValues(inputs));
  const [errors, setErrors] = useState(initialValues(inputs));
  const [isValid, setIsValid] = useState(false);

  function checkValidity(v, e) {
    const formIsNotEmpty = Object.entries(v).every(
      ([key, value]) => value !== ""
    );
    const noErrors = Object.entries(e).every(([key, value]) => value === "");
    if (formIsNotEmpty && noErrors) setIsValid(true);
    else setIsValid(false);
  }

  function onChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const validationMessage = e.target.validationMessage;
    const newValues = {};
    for (const [key, value] of Object.entries(values))
      newValues[key] = key === inputName ? inputValue : value;
    setValues(newValues);
    const newErrors = {};
    for (const [key, value] of Object.entries(errors))
      newErrors[key] = key === inputName ? validationMessage : value;
    setErrors(newErrors);
    checkValidity(newValues, newErrors);
  }

  return [values, errors, isValid, onChange];
}

export default useForm;
