import React, { useState, useEffect } from 'react';
import FilterDropdown from '../FilterDropdown/FilterDropdown';
import './SearchFilter.css';
import JobList from '../JobList/JobList';
import { useDispatch, useSelector } from 'react-redux';
import fetchJobData from '../../redux/api.js';
import { debounce } from 'lodash';


const SearchFilter = () => {
  const [limit, setLimit] = useState(21); // Number of items to fetch per request
  const [offset, setOffset] = useState(0); // Starting index of the items to fetch
  const dispatch = useDispatch();
  const { data, error, isLoading } = useSelector(state => state);
  const [role, setRole] = useState([]);
  const [experience, setExperience] = useState(null);
  const [locationState, setLocationState] = useState([]);
  const [minBasePay, setMinBasePay] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [searchTerm, setSearchTerm] = useState('');



  useEffect(() => {
    dispatch(fetchJobData(limit, offset));
  }, [dispatch, limit, offset]);


  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;
      if (scrollPercentage >= 0.99) {
        setOffset(offset + 1); // Increment offset to fetch more data
      }
    };


    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset, limit]);

  const handleChange = (field, changedValue) => {
    
    setSelectedFilters({ ...selectedFilters, [field]: changedValue });

    switch (field) {
      case 'Role':
        setRole(changedValue);
        break;
      case 'Experience':
        setExperience(changedValue);
        break;
      case 'Location':
        setLocationState(changedValue);
      break;
      case 'MinBasePay':
        setMinBasePay(changedValue);
      break;
      default:
        break;
    }
  };

  const handleSearch = debounce((value) => {
    setSearchTerm(value);
    setSelectedFilters({ ...selectedFilters, ['company']: value });
  }, 300);



  const roles = [
    { value: "android", label: "android" },
    { value: "ios", label: "ios" },
    { value: "backend", label: "backend" },
    { value: "frontend", label: "frontend" },
    { value: "tech-lead", label: "tech lead" }
  ];


  const experienceOptions = [
    { value: "1", label: "1 year" },
    { value: "2", label: "2 years" },
    { value: "3", label: "3 years" },
    { value: "4", label: "4 years" },
  ];


  const location = [
    { value: "remote", label: "Remote" },
    { value: "hybrid", label: "Hybrid" },
    { value: "bangalore", label: "Bangalore" },
    { value: "delhi ncr", label: "Delhi NCR" },
    { value: "mumbai", label: "Mumbai" },
  ];

  const salary = [
       { value: "10", label: "10 LPA" },
       { value: "20", label: "20 LPA" },
       { value: "30", label: "30 LPA" },
       { value: "40", label: "40 LPA" },
       { value: "50", label: "50 LPA" },
       { value: "60", label: "60 LPA" },
       { value: "70", label: "70 LPA" },
       { value: "80", label: "80 LPA" },
       { value: "90", label: "90 LPA" },
       { value: "100", label: "100 LPA" },
     ];


  return (
    <>
    <div >
    <div className="search-filter" >
      <div className="search-filter">
        <FilterDropdown value={role}
          placeholder={"Role"}
          Options={roles}
          SetValue={(v) => handleChange('Role', v)} />
        <FilterDropdown value={experience}
          placeholder={"Experience"}
          Options={experienceOptions}
          SetValue={(v) => handleChange('Experience', v)} />
        <FilterDropdown value={locationState}
          placeholder={"Location"}
          Options={location}
          SetValue={(v) => handleChange('Location', v)} />
        <FilterDropdown value={minBasePay}
          placeholder={"Min Base Pay"}
          Options={salary}
          SetValue={(v) => handleChange('MinBasePay', v)} />
         <input
          className='custom-search'
          type='text'
          placeholder='Search Company'
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)} />

      </div>
     
    </div>
    <div className="joblist">
    <JobList filters={selectedFilters} />
    </div>
    </div>
    </>
  );
};


export default SearchFilter;
