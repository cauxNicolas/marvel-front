import React from "react";

const Pagination = ({ limit, total, setOffset }) => {
  const buttonsCount = total / limit;
  const buttons = [];

  for (let i = 1; i <= buttonsCount; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => {
          setOffset(i * limit);
        }}
      >
        {i}
      </button>
    );
  }

  return <div>{buttons}</div>;
};

export default Pagination;
