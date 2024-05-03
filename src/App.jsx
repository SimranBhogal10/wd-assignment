import React from 'react'
import JobList from './Components/JobList/JobList';
import SearchFilter from './Components/SearchFilter/SearchFilter';

function App() {
  const jobs = [
    {
      id: 1,
      posted: 'Posted 10 days ago',
      company: 'Super Software Co.',
      title: 'Backend Developer',
      location: 'San Francisco, CA',
      estimated_salary: 1,
      about_us: 'Exciting opportunity for a backend developer with strong skills...Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..',
      min_exp: '1 years',
    },
    {
      id: 1,
      posted: 'Posted 10 days ago',
      company: 'Super Software Co.',
      title: 'Backend Developer',
      location: 'San Francisco, CA',
      estimated_salary: 1,
      about_us: 'Exciting opportunity for a backend developer with strong skills...Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..',
      min_exp: 1,
    },
    {
      id: 1,
      posted: 'Posted 10 days ago',
      company: 'Super Software Co.',
      title: 'Backend Developer',
      location: 'San Francisco, CA',
      estimated_salary: 1,
      about_us: 'Exciting opportunity for a backend developer with strong skills...Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..',
      min_exp: 1,
    },
    {
      id: 1,
      posted: 'Posted 10 days ago',
      company: 'Super Software Co.',
      title: 'Backend Developer',
      location: 'San Francisco, CA',
      estimated_salary: 1,
      about_us: 'Exciting opportunity for a backend developer with strong skills...Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..Exciting opportunity for a backend developer with strong skills..',
      min_exp: 1,
    },
  ];
  return (
    <div className="app">
      <h1>Job Board</h1>
      <SearchFilter />
      <JobList jobs={jobs} />
    </div>
  );
}

export default App


