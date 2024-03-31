import React from "react";

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  label: string;
  marginTop?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button
      type="button"
      className="btn btn-primary"
      style={{ width: "100px", marginRight: "10px", marginTop: "10px" }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
