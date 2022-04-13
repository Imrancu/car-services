import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';
import './Experts.css';

const experts = [
    { id: 1, name: 'Willium Smith', img: expert1 },
    { id: 2, name: 'Jorse Devid', img: expert2 },
    { id: 3, name: 'Jhon Lock', img: expert3 },
    { id: 4, name: 'Mill Tomas', img: expert4 },
    { id: 5, name: 'Henry Dock', img: expert5 },
    { id: 6, name: 'Jenny Cut', img: expert6 }
]

const Experts = () => {
    return (
        <div id='experts' className='container mt-5'>
            <h1 className='text-center text-primary'>Our Experts</h1>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    />)
                }
            </div>
        </div>
    );
};

export default Experts;