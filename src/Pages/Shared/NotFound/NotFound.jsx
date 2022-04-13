import React from 'react';
import img from '../../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center text-primary mt-3'>This Page isn't found!</h2>
            <img className='w-25 mx-auto d-block' src={img} alt="" />
        </div>
    );
};

export default NotFound;