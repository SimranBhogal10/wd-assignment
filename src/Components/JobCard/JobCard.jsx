import React, { useState } from 'react';
import './JobCard.css'
import logo192 from "../../logo192.png";

const JobCard = ({ job }) => {
    const [showDescription, setShowDescription] = useState(false);
    const descriptionLimit = 300; // Character limit for initial display

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    const renderTruncatedDescription = () => {
        const truncatedText = job.about_us.slice(0, descriptionLimit);
        const remainingText = job.about_us.slice(descriptionLimit);
        
        return (
            <>
                {truncatedText}
                {remainingText && ( // Render if there's remaining text
                    <span className="hidden-text">
                        {remainingText}
                    </span>
                )}
            </>
        );
    };

    return (
        <div className="job-card">
            <p className="posted">⏳ {job.posted}</p>
            <div className="company-info">
                <div className="company-icon">
                    <img src={logo192} alt={job.company} />
                </div>
                <div className="company-details">
                    <p className="company">{job.company}</p>
                    <h3 className="job-title">{job.title}</h3> 
                    <p className="location">{job.location}</p>
                </div>
            </div>
            {/* <h3 className="job-title">{job.title}</h3> 
            <p className="location">{job.location}</p> */}
            <p className="salary">Estimated Salary: {job.estimated_salary} ✅</p>
            <h4 className='about-company'>About Company</h4>
            <p className='about-us-title'>About us</p>
            <div>
                <p className='description'>
                    {showDescription ? job.about_us : renderTruncatedDescription()}
                </p>
                {job.about_us.length > descriptionLimit && (
                    <a href="#" className='view-job' onClick={toggleDescription}>
                        {showDescription ? 'Hide Job' : 'View Job'}
                    </a>
                )}
            </div>
            <p className='min-exp'>Minimum Experience</p>
            <p className="exp">{job.min_exp}</p>
            <button className='apply-button' type='submit'>⚡ Easy Apply</button>
            <button className='unlock-button' type='submit'>Unlock referral asks</button>
        </div>
    );
};

export default JobCard;
