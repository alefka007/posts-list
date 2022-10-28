import React from 'react';

const MySelect = ({ options, defaultValue, value, onChange, className }) => {
    return (
        <select
            className={className}
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            <option disabled value=''>{defaultValue}</option>
            {options.map(option =>
                <option key={option.name} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;