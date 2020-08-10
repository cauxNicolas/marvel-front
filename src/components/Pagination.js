import React from "react";

const Pagination = ({ limit, total, setOffset, offset }) => {
  const totalPage = Math.ceil(total / limit);
  const nbrePage = totalPage * limit - limit;

  const firstpage = () => {
    setOffset(0);
  };

  const nextPage = () => {
    if (offset < total) {
      setOffset(offset + 100);
    }
  };

  const prevPage = () => {
    if (offset > 0) {
      setOffset(offset - 100);
    }
  };

  const lastpage = () => {
    setOffset(nbrePage);
  };

  const prev10Page = () => {
    if (offset >= 1000) {
      setOffset(offset - 1000);
    }
  };

  const next10Page = () => {
    if (offset <= total - 1000) {
      setOffset(offset + 1000);
    }
  };

  const prev100Page = () => {
    if (offset >= 10000) {
      setOffset(offset - 10000);
    }
  };

  const next100Page = () => {
    if (offset <= total - 10000) {
      setOffset(offset + 10000);
    }
  };

  console.log(totalPage);

  return (
    <div>
      <button onClick={firstpage}>{`|<`}</button>
      {totalPage > 100 ? <button onClick={prev100Page}>{`< 100`}</button> : ""}
      <button onClick={prev10Page}>{`< 10`}</button>
      <button onClick={prevPage}>{`<<`}</button>
      <span>
        {Math.ceil(offset / limit) + 1} / {totalPage} pages
      </span>
      <button onClick={nextPage}>{`>>`}</button>
      <button onClick={next10Page}>{`10 >`}</button>
      {totalPage > 100 ? <button onClick={next100Page}>{`100 >`}</button> : ""}
      <button onClick={lastpage}>{`>|`}</button>
    </div>
  );
};

export default Pagination;
