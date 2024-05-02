

import {React, useState} from 'react';
import './JobCard.css';

const JobCard = ({ job }) => {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };
  
  return (
    <div className="job-card">
    <p className="posted">{job.posted}</p>
    <p className="company">{job.company}</p>
    <h3 className="job-title">{job.title}</h3> 
    <p className="location">{job.location}</p>
    <p className="salary">Estimated Salary: {job.estimated_salary}</p>
    <div className={`description-container ${showDescription ? 'expanded' : 'collapsed'}`}>
    <h4 className='location'>About Company</h4>
    <p className='about-us-title'>About us<br/>
        {showDescription ? job.about_us : `${job.about_us.slice(0, 100)}...`}
        {' '}
        {!showDescription && (
          <a href="#" className='view-job' onClick={toggleDescription}>View Job</a>
        )}
      </p>
      </div>
    <p className='min-exp'>Minimum Experience</p>
    <p className="exp">{job.min_exp}</p>
    <button className='apply-button' type='submit'>Easy Apply</button>
    <button className='unlock-button' type='submit'>Unlock referral asks</button>
    </div>
  );
};

export default JobCard;
