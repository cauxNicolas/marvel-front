import React from "react";

const Pagination = ({ limit, total, setOffset }) => {
  const buttonsCount = Math.round(total / limit); // merci Eros Math.round()
  const buttons = [];

  for (let i = 1; i <= buttonsCount; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => {
          setOffset(i * limit - 100);
        }}
      >
        {i}
      </button>
    );
  }

  return <div>{buttons}</div>;
};

export default Pagination;
