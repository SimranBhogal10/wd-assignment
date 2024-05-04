import React from 'react';
import './JobCard.css'

const JobCard = ({ job }) => {

    return (
        <div className="job-card">
            <p className="posted">⏳ Posted a day ago</p>
            <div className="company-info">
                <div className="company-icon">
                    <img src={job.logoUrl} alt={job.companyName} />
                </div>
                <div className="company-details">
                    <p className="company">{job.companyName}</p>
                    <h3 className="job-title">{job.jobRole}</h3> 
                    <p className="location">{job.location}</p>
                </div>
            </div>
            <p className="salary">Estimated Salary: {job.maxJdSalary} LPA ✅</p>
            <h4 className='about-company'>About Company</h4>
            <p className='about-us-title'>About us</p>
            <div className='description-container'>
                <p className='description'>
                    {job.jobDetailsFromCompany}
                </p>
                <div className='view-job'><a href="#">View Job</a></div>          
            </div>
            <p className='min-exp'>Minimum Experience</p>
            <p className="exp">{job.minExp}-{job.maxExp}</p>
            <button className='apply-button' type='submit'>⚡ Easy Apply</button>
            <button className='unlock-button' type='submit'>Unlock referral asks</button>
        </div>
    );
};

export default JobCard;
