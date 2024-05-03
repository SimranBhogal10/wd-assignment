import React from 'react'
import JobList from './Components/JobList/JobList';
import SearchFilter from './Components/SearchFilter/SearchFilter';

function App() {
  return (
    <div className="app">
      <h1>Job Board</h1>
      <SearchFilter />
      <JobList />
    </div>
  );
}

export default App


