import React from "react";
import iconPath from "./icons.svg";
import "./Button.css";

/**
 * <Button
 *   className="MyButton"
 *   onClick={() => console.log('Click')} 
 * />
 *
 * @prop {Function} onClick
 * @prop {mixed} ... All other props will be forwarded to the native DOM button.

 */
export function Button(props) {
  const { onClick, className, ...otherProps } = props;

  return (
    <button
      type="button"
      className={"Button " + (className || "")}
      onClick={onClick}
      {...otherProps}
    >
      <svg viewBox="0 0 24 24" width="24" height="16">
        <use xlinkHref={iconPath + "#dls-icon-arrow-right"} />
      </svg>
    </button>
  );
}
