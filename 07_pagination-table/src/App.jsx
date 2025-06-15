import './App.css';
import PaginationTable from './components/PaginationTable';
import { columns, users } from './data';

function App() {
  return (
    <div>
      <PaginationTable
        listProps={{
          pageSize: 5,
          totalCount: users.length,
          data: users,
          columnDef: columns,
        }}
      />
    </div>
  );
}

export default App;
