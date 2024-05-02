
import React from 'react';
import JobCard from '../JobCard/JobCard';
import './JobList.css'; 

const JobList = ({ jobs }) => {
  return (
    <div className="job-list">
      <h2>Job Listings</h2>
      <div className="job-cards-container">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      </div>
    </div>
  );
};

export default JobList;