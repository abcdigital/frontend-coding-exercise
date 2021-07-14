import React from "react";
import "./ResultsList.css";

/**
 * <ResultsList
 *   items={[...]}
 *   onSelect={item => console.log(item.name)}
 *   className="MyResultsList"
 * />
 *
 * @prop {Array} items List of results of form { name: string, state: { abbreviation: string } }
 * @prop {Function} onSelect Callback to execute when item is selected, accepts object.
 * @prop {mixed} ... All other props will be forwarded to the container DOM node.
 */
export function ResultsList(props) {
  const { className, onSelect, items, ...otherProps } = props;

  return (
    <ul className={"ResultsList " + (className || "")} {...otherProps}>
      {items.map(function(item, index) {
        return (
          <li
            key={"item" + index}
            className="ResultsList-item"
            onClick={() => onSelect && onSelect(item)}
          >
            <button className="ResultsList-button">
              {item.name}, {item.state.abbreviation}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
