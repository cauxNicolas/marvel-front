import React from "react";

const Pagination = ({ limit, total, setOffset, offset }) => {
  const totalPage = Math.round(total / limit); // merci Eros Math.round()

  const firstpage = () => {
    setOffset(0);
  };

  const nextPage = () => {
    if (offset < totalPage) {
      setOffset(offset + 1);
    }
  };

  const prevPage = () => {
    if (offset > 0) {
      setOffset(offset - 1);
    }
  };

  const lastpage = () => {
    setOffset(totalPage);
  };

  const prev10Page = () => {
    setOffset(offset - 10);
  };

  const next10Page = () => {
    setOffset(offset + 10);
  };

  const prev100Page = () => {
    setOffset(offset - 100);
  };

  const next100Page = () => {
    setOffset(offset + 100);
  };

  console.log(totalPage);

  return (
    <div>
      <button onClick={firstpage}>{`|<`}</button>
      {totalPage > 100 ? <button onClick={prev100Page}>{`< 100`}</button> : ""}
      <button onClick={prev10Page}>{`< 10`}</button>
      <button onClick={prevPage}>{`<<`}</button>
      <span>
        {offset} / {totalPage} pages
      </span>
      <button onClick={nextPage}>{`>>`}</button>
      <button onClick={next10Page}>{`10 >`}</button>
      {totalPage > 100 ? <button onClick={next100Page}>{`100 >`}</button> : ""}
      <button onClick={lastpage}>{`>|`}</button>
    </div>
  );
};

export default Pagination;
