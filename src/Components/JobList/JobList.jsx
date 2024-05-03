
import React, {useEffect} from 'react';
import JobCard from '../JobCard/JobCard';
import './JobList.css'; 
import { useSelector, useDispatch } from "react-redux";
import fetchJobData  from '../../redux/api.js';

const JobList = () => {
  console.log('hi');
  const dispatch = useDispatch();
  const { data, error, isLoading } = useSelector(state => state);

  console.log(data)

  useEffect(() => {
       dispatch(fetchJobData());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(data)
  return (
    <div className="job-list">
      <div className="job-cards-container">
      {data?.jdList?.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      </div>
    </div>
  );
};

export default JobList;