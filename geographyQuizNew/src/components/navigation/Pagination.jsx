import React from "react";

const Pagination = ({
  currentPageState = 1,
  setCurrentPageState,
  countriesPerPage,
  filteredCountries = [],
}) => {
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => setCurrentPageState(1)}
            disabled={currentPageState <= 1}
          >
            First page
          </button>
          <button
            onClick={() => setCurrentPageState((prev) => Math.max(prev - 5, 1))}
            disabled={currentPageState <= 5}
          >
            -5
          </button>
          <button
            onClick={() => setCurrentPageState((prev) => Math.max(prev - 1, 1))}
            disabled={currentPageState <= 1}
          >
            -1
          </button>
          <input
            name="jumpTo"
            placeholder="Jump to page..."
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
            onKeyDown={({ key, target }) => {
              if (key === "Enter") {
                const pageNumber = Number(target.value);
                const maxPage = Math.ceil(
                  filteredCountries.length / countriesPerPage
                );
                if (pageNumber >= 1 && pageNumber <= maxPage) {
                  setCurrentPageState(pageNumber);
                }
              }
            }}
          />
          <button
            onClick={() =>
              setCurrentPageState((prev) =>
                Math.min(
                  prev + 1,
                  Math.ceil(filteredCountries.length / countriesPerPage)
                )
              )
            }
            disabled={
              currentPageState >=
              Math.ceil(filteredCountries.length / countriesPerPage)
            }
          >
            +1
          </button>
          <button
            onClick={() =>
              setCurrentPageState((prev) =>
                Math.min(
                  prev + 5,
                  Math.ceil(filteredCountries.length / countriesPerPage)
                )
              )
            }
            disabled={
              currentPageState >=
              Math.ceil(filteredCountries.length / countriesPerPage - 4)
            }
          >
            +5
          </button>
          <button
            onClick={() =>
              setCurrentPageState(
                Math.ceil(filteredCountries.length / countriesPerPage)
              )
            }
            disabled={
              currentPageState >=
              Math.ceil(filteredCountries.length / countriesPerPage)
            }
          >
            Last page
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {currentPageState} of{" "}
        {Math.ceil(filteredCountries.length / countriesPerPage)}
      </div>
    </div>
  );
};

export default Pagination;
