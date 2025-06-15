import React, { useState } from 'react';

const PaginationTable = ({ listProps }) => {
  const { pageSize, data, columnDef } = listProps;

  const [pageNumber, setPageNumber] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [globalSearch, setGlobalSearch] = useState('');

  const filteredData = data.filter((row) =>
    columnDef.some((col) =>
      row[col].toString().toLowerCase().includes(globalSearch.toLowerCase())
    )
  );

  const sortedData = () => {
    if (!sortConfig.key) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];

      if (typeof aVal === 'number') {
        return sortConfig.direction === 'asc' ? aVal - bVal : bVal - aVal;
      }

      return sortConfig.direction === 'asc'
        ? aVal.toString().localeCompare(bVal.toString())
        : bVal.toString().localeCompare(aVal.toString());
    });
  };

  const sortedFilteredData = sortedData();
  const startIndex = (pageNumber - 1) * pageSize;
  const currentData = sortedFilteredData.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(sortedFilteredData.length / pageSize);

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
    setPageNumber(1); // reset to page 1 on sort
  };

  const handleGlobalSearch = (e) => {
    setGlobalSearch(e.target.value);
    setPageNumber(1); // reset to page 1 on search
  };

  return (
    <div className='table-wrapper'>
      <input
        type='text'
        placeholder='Search across all fields...'
        value={globalSearch}
        onChange={handleGlobalSearch}
        style={{ marginBottom: '10px', padding: '5px', width: '100%' }}
      />

      <table>
        <thead>
          <tr>
            {columnDef.map((col) => (
              <th key={col} onClick={() => handleSort(col)} style={{ cursor: 'pointer' }}>
                {col} {sortConfig.key === col ? (sortConfig.direction === 'asc' ? '⬆️' : '⬇️') : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.length === 0 ? (
            <tr>
              <td colSpan={columnDef.length} style={{ textAlign: 'center' }}>
                No data found
              </td>
            </tr>
          ) : (
            currentData.map((item) => (
              <tr key={item.id}>
                {columnDef.map((col) => (
                  <td key={col}>{item[col]}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className='pagination-wrapper' style={{ marginTop: '10px' }}>
        <button disabled={pageNumber === 1} onClick={() => setPageNumber(pageNumber - 1)}>
          Previous
        </button>
        <span style={{ margin: '0 10px' }}>
          Page {pageNumber} of {totalPages}
        </span>
        <button disabled={pageNumber === totalPages} onClick={() => setPageNumber(pageNumber + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationTable;
