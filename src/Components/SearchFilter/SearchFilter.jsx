import React, { useState } from 'react';
import FilterDropdown from '../FilterDropdown/FilterDropdown';
import './SearchFilter.css';

const SearchFilter = ({onSearch}) => {
    const [Role, setRole] = useState([]);
    const [TechStack, setTechStack] = useState("");
    const [Experience, setExperience] = useState(null);
    const [Location, setLocation] = useState([]);
    const [MinBasePay, setMinBasePay] = useState(null);
    // const [searchTerm, setSearchTerm] = useState('');

//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//     onSearch(searchTerm);
//   };

//   const handleSearch = (searchTerm) => {
//     const filteredData = data.filter((item) =>
//       item.company.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setData(filteredData);
//   };


  const roleOptions = [
    { value: "android", label: "android" },
    { value: "ios", label: "ios" },
    { value: "tech lead", label: "tech lead" },
    { value: "backend", label: "backend" },
    { value: "frontend", label: "frontend" },
  ];

  const expOptions = [
    { value: "1", label: "1 year" },
    { value: "2", label: "2 years" },
    { value: "3", label: "3 years" },
    { value: "4", label: "4 years" },
    { value: "5", label: "5 years" },
    { value: "6", label: "6 years" },
    { value: "7", label: "7 years" },
    { value: "8", label: "8 years" },
    { value: "9", label: "9 years" },
    { value: "10", label: "10 years" },
    // Add more options as needed
  ];

  const locationOptions = [
    { value: "remote", label: "Remote" },
    { value: "hybrid", label: "Hybrid" },
    { value: "onsite", label: "On-site" }
  ];

  const minbaseOptions = [
    { value: "0", label: "0 LPA" },
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

  const techStackOptions = [
    { value: "java", label: "Java" },
    { value: "javascript", label: "Javascript" },
    { value: "react", label: "React" },
    { value: "node", label: "Node JS" },
    { value: "redux", label: "Redux" },
  ];
  


  return (
        <div className="search-filter">
            <FilterDropdown  value={Role}
            placeholder={"Role"}
            Options={roleOptions}
            SetValue={(v) => setRole(v)}/>
            <FilterDropdown value={Experience}
            placeholder={"Experience"}
            Options={expOptions}
            SetValue={(v) => setExperience(v)}/>
            <FilterDropdown value={Location}
            placeholder={"Location"}
            Options={locationOptions}
            SetValue={(v) => setLocation(v)}/>
            <FilterDropdown value={MinBasePay}
            placeholder={"Min Base Pay"}
            Options={minbaseOptions}
            SetValue={(v) => setMinBasePay(v)}/>
            <FilterDropdown value={TechStack}
            placeholder={"Tech Stack"}
            Options={techStackOptions}
            SetValue={(v) => setTechStack(v)}/>
            <input className='custom-search' type='text' placeholder='Search Company' />
    </div>
  );
};

export default SearchFilter;