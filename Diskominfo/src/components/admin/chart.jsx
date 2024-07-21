import React from "react";

export const Chart = (props) => {
  const { title, text, description } = props;
  return (
    <div>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">{title}</div>
          <div className="stat-value">{text}</div>
          <div className="stat-desc">{description}</div>
        </div>
      </div>
    </div>
  );
};
