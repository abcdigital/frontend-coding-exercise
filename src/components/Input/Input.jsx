import React, { useState, useEffect } from "react";
import "./Input.css";

/**
 * <Input
 *   className="MyInput"
 *   data-something="Value"
 *   value="Hello, World!"
 *   onChange={(value) => console.log('You typed', value)}
 * />
 *
 * @prop {string} value The default value for the input.
 * @prop {string} placeholder The placeholder text.
 * @prop {Function} onChange Callback that will receive current input value.
 * @prop {mixed} ... All other props will be forwarded to the native DOM input.
 */
export function Input(props) {
  const { className, value, onChange, ...otherProps } = props;

  const [inputValue, setInputValue] = useState(value);

  // Keep the current value, unless the parent component supplies a different "value" prop.
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  function handleChange(event) {
    setInputValue(event.target.value);
    onChange && onChange(event.target.value);
  }

  return (
    <input
      className={"Input " + (className || "")}
      type="text"
      value={inputValue}
      onChange={handleChange}
      {...otherProps}
    />
  );
}
