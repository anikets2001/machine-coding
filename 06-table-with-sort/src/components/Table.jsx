import { useEffect, useState } from "react";

const columns = ["id", "name", "email"];
const apiUrl = "https://jsonplaceholder.typicode.com/users";

const Table = () => {
  const [users, setUsers] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const getData = async () => {
    const response = await fetch(apiUrl);
    const json = await response.json();
    setUsers(json);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSort = (column) => {
    let direction = "asc";
    if (sortConfig.key === column && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key: column, direction });
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aVal = a[sortConfig.key]?.toString().toLowerCase();
    const bVal = b[sortConfig.key]?.toString().toLowerCase();

    if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div>
      <table className="table-wrapper">
        <thead className="table-head">
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                onClick={() => handleSort(column)}
                style={{ cursor: "pointer" }}
              >
                {column.charAt(0).toUpperCase() + column.slice(1)}
                {sortConfig.key === column
                  ? sortConfig.direction === "asc"
                    ? " ↑"
                    : " ↓"
                  : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td className="table-data">{user.id}</td>
              <td className="table-data">{user.name}</td>
              <td className="table-data">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
