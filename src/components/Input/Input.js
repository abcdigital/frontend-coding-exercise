import React, { Component } from "react";
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
export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ""
    };
  }

  componentWillReceiveProps(nextProps) {
    // Keep the current value, unless the parent component supplies a different "value" prop.
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value });
    }
  }

  onChange(value) {
    this.setState({ value: value });
    this.props.onChange && this.props.onChange(value);
  }

  render() {
    const { className, value, onChange, ...otherProps } = this.props;

    return (
      <input
        className={"Input " + (className || "")}
        type="text"
        value={this.state.value}
        onChange={event => this.onChange(event.target.value)}
        {...otherProps}
      />
    );
  }
}
