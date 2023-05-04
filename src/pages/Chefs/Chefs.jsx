import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const Chefs = () => {
    const [chef, setChef] = useState([]);

    useEffect(() => {
        fetch('https://indian-taste-server-nr848clcx-towhid-raiyan.vercel.app/data')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h2 className='text-center fs-1 fw-bolder mt-5 '>OUR EXPERT CHEFS</h2>
            <h2 className='text-center fs-5  mb-5 text-warning'>--- PROFESSIONAL COOK TEAM ---</h2>
            <div className='row row-cols-1 row-cols-md-3 g-4 my-5'>
                {
                    chef.map(c => <ChefCard
                        key={c.id}
                        c={c}
                    ></ChefCard>)
                }
            </div>

        </div>
    );
};

export default Chefs;