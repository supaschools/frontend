import React from "react";

const Input = ({
  type,
  id,
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 text-sm font-sans text-gray-800 bg-white border border-gray-200 rounded-lg"
        style={{
          display: "block",
          alignItems: "center",
          fontSize: "1rem",
          padding: "0.8em 1em",
          color: "#000000",
          backgroundColor: "#f2f2f2",
          borderRadius: "0.8em",
          border: "0.15em solid #ced4da",
          userSelect: "none",
          marginBottom: "0.4em",
        }}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
