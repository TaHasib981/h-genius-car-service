import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {_id, name, img, price , description} = service
    const navigate = useNavigate()
    const navigateToServiceDetails = _id =>{
        navigate(`/${_id}`)
    }
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={ () => navigateToServiceDetails(_id)}>Book: {name}</button>
        </div>
    );
};

export default Service;