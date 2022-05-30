import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    const [service, setService] = useState({})
    useEffect( () =>{
        fetch(`http://localhost:5000/service/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div>
            <h2>You are book about : {service.name}</h2>
        </div>
    );
};

export default ServiceDetails;