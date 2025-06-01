import "./App.css";
import { useState } from "react";
import ProductCard from "./components/ProductCard";
import { useFetchData } from "./hooks/useFetchData";

function App() {
  const products = useFetchData("products?limit=200");
  const [currPage, setCurrPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const TOTAL_ITEMS = products.length;
  const TOTAL_PAGES = Math.ceil(TOTAL_ITEMS / pageSize);

  const START = currPage * pageSize;
  const END = START + pageSize;

  const handleCurrentPage = (item) => {
    setCurrPage(item);
  };

  const handlePrevDisable = () => currPage === 0;

  const handleNextDisable = () => currPage === TOTAL_PAGES - 1;

  const handleSelect = (e) => {
    setPageSize(Number(e.target.value));
    setCurrPage(0);
  };

  return (
    <>
      <div className="page-wrapper">
        {products.length > 0 ? (
          products
            .slice(START, END)
            .map((item) => (
              <ProductCard
                key={item.id}
                imageUrl={item.thumbnail}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            ))
        ) : (
          <h1>No products found</h1>
        )}
      </div>

      <div className="pagination-wrapper">
        <label htmlFor="select">Items Per Page:</label>
        <select id="select" value={pageSize} onChange={handleSelect}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>

        <button onClick={() => setCurrPage(0)} disabled={handlePrevDisable()}>
          First
        </button>

        <button
          onClick={() => setCurrPage(currPage - 1)}
          disabled={handlePrevDisable()}
          className={handlePrevDisable() ? "disabled" : ""}
        >
          Previous
        </button>

        {[...Array(TOTAL_PAGES).keys()].map((item) => (
          <button
            key={item}
            className={`pagination-btn ${item === currPage ? "curr-page" : ""}`}
            onClick={() => handleCurrentPage(item)}
          >
            {item + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrPage(currPage + 1)}
          disabled={handleNextDisable()}
          className={handleNextDisable() ? "disabled" : ""}
        >
          Next
        </button>

        <button
          onClick={() => setCurrPage(TOTAL_PAGES - 1)}
          disabled={handleNextDisable()}
        >
          Last
        </button>
      </div>
    </>
  );
}

export default App;