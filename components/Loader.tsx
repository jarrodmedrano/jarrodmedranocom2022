import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import styles from "./style.module.css";

export default function Loader({ color, className, style, size }) {
  const circles = [...Array(12)].map((_, index) => (
    <div
      key={index}
      style={{
        background: `${color}`,
        width: size * 0.075,
        height: size * 0.075,
      }}
    />
  ));

  return (
    <div
      className={classNames(styles["lds-default"], className)}
      style={{ height: size, width: size, ...style }}
    >
      {circles}
    </div>
  );
}

Loader.propTypes = {
  /** hex color */
  color: PropTypes.string,
  /** size in pixel */
  size: PropTypes.number,
  /** class name  */
  className: PropTypes.string,
  /** style object */
  style: PropTypes.object,
};

Loader.defaultProps = {
  color: "#f80003",
  size: 80,
  className: "",
  style: {},
};
