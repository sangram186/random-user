import React from 'react';
import './Header.css';

const Header = (props) => {
    const count = props.count;
    
    console.log(props)
    const salary = count.reduce( (totlaSalary, singleSalary) => totlaSalary + singleSalary.salary, 0)
    return (
        <div className='cart'>
            <h2>Friends added: {count.length}</h2>
            <p>Total Salary: ${salary}</p>
        </div>
    );
};

export default Header;