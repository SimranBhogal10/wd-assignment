import React from 'react';
import JobCard from '../JobCard/JobCard';
import './JobList.css';
import { useSelector } from 'react-redux';


const JobList = ({ filters }) => {
  const { data, error, isLoading } = useSelector(state => state);


  console.log(filters)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredData = data?.payload?.jdList.filter((job) => {
    return (
      (!filters.Role || filters.Role.length === 0 || filters.Role.some((role) => job.jobRole && role.label.toLowerCase().includes(job.jobRole.toLowerCase()))) &&
      (!filters.Experience || filters.Experience.length === 0 || filters.Experience.some((exp) => exp.value <= job.minExp)) &&
      (!filters.Location || filters.Location.length === 0 || filters.Location.some((loc) => loc.value === job.location)) &&
      (!filters.MinBasePay || filters.MinBasePay.length === 0 || filters.MinBasePay.every((pay) => job.maxJdSalary && pay.value && job.maxJdSalary >= pay.value)) &&
      (!filters.company || filters.company === '' || job.companyName.toLowerCase().includes(filters.company.toLowerCase()))
    );
  });

  return (
    <div className="job-list">
      {filteredData && filteredData.length > 0 ? (
        <div className="job-cards-container">
          {filteredData.map((job) => (
            <JobCard key={job.jdUid} job={job} />
          ))}
        </div>
      ) : (
        <div className='no-job'>No jobs found.</div>
      )}
    </div>
  );
};


export default JobList;