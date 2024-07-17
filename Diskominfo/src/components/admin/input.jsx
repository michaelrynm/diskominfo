import React from "react";

export const Input = (props) => {
  const { label, type, placeholder } = props;
  return (
    <div>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <input
          type={type}
          placeholder={placeholder}
          className="input input-bordered input-md w-full max-w-xs"
        />
      </label>
    </div>
  );
};
