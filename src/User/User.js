import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPhone, faEnvelope, faGlobe, faCity, faPlus, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import './User.css';

const User = (props) => {
    const user = props.user;
    return (
        <div className='users'>
            <div className="img">
                <img src={user.img} alt=""/>
            </div>
            <div className="user-info">
                <h2>{user.name}</h2>
                <p><FontAwesomeIcon icon={faPhone}/> {user.phone}</p>
                <p><FontAwesomeIcon icon={faCity}/> {user.address.city}</p>
                <p><FontAwesomeIcon icon={faEnvelope}/> {user.email}</p>
                <p><FontAwesomeIcon icon={faGlobe}/> {user.website}</p>
                <p><FontAwesomeIcon icon={faMoneyCheckAlt}/> Salary: {user.salary}</p>
                <button onClick={()=> props.handleCount(user)}><FontAwesomeIcon icon={faPlus}/></button>
            </div>
        </div>
    );
};

export default User;