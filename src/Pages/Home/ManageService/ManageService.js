import React from 'react';
import useService from '../../hooks/useService';

const ManageService = () => {
    const [services, setServices] = useService()
    const handleDeleteService = id => {
        const confirm = window.confirm('Are you sure?')
        if(confirm){
            const url = `http://localhost:5000/service/${id}`
            fetch(url, {
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = services.filter(service => service._id !== id)
                setServices(remaining)
            })
        }
    }
    return (
        <div>
            <h3>MANAGE SERVICES ...............</h3>
            {
                services.map(service => <div key={service._id}>
                    <h4>
                        {service.name}
                        <button onClick={() => handleDeleteService(service._id)}>x</button>
                    </h4>
                </div>)
            }
        </div>
    );
};

export default ManageService;