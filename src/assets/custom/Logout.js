import React from "react";
import Button from "react-bootstrap/Button";

export const Logout = ({ primary, secondary }) => {
  return (
    <Button
      variant="link"
      style={{ padding: 0, margin: 0, border: 0, background: "transparent" }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.24 2C13.71 2 14.1 2.38 14.1 2.86V21.15C14.1 21.62 13.72 22.01 13.24 22.01C7.34999 22.01 3.23999 17.9 3.23999 12.01C3.23999 6.12 7.35999 2 13.24 2Z"
          fill={secondary ? secondary : "#292D32"}
        />
        <path
          d="M20.54 11.5402L17.7 8.69016C17.41 8.40016 16.93 8.40016 16.64 8.69016C16.35 8.98016 16.35 9.46016 16.64 9.75016L18.2 11.3102H8.63C8.22 11.3102 7.88 11.6502 7.88 12.0602C7.88 12.4702 8.22 12.8102 8.63 12.8102H18.2L16.64 14.3702C16.35 14.6602 16.35 15.1402 16.64 15.4302C16.79 15.5802 16.98 15.6502 17.17 15.6502C17.36 15.6502 17.55 15.5802 17.7 15.4302L20.54 12.5802C20.83 12.3002 20.83 11.8302 20.54 11.5402Z"
          fill={primary ? primary : "#a9abad"}
        />
      </svg>
    </Button>
  );
};
