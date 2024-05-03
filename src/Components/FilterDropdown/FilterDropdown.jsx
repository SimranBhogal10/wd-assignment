import React from 'react';
import Select from 'react-select';

function FilterDropdown({ value, SetValue, Options, placeholder}) {

    const handleRoleChange = (selectedOptions) => {
        SetValue(selectedOptions)
      };

      const customStyles = {
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? 'white' : 'black',
            backgroundColor: state.isSelected ? '#007bff' : 'white',
            textAlign: 'left',
            '&:hover': {
              backgroundColor: '#f8f9fa',
            },
          }),
          control: (provided) => ({
            ...provided,
            marginLeft: 10,
            marginRight:10,
            marginTop: 10,
          }),
          menu: (provided) => ({
            ...provided,
            marginLeft: 10,
          }),
      };
    
      return (
            <Select
          isMulti
          options={Options}
          placeholder={placeholder}
          value={value}
          onChange={handleRoleChange}
          styles={customStyles}
        />
      );
}

export default FilterDropdown