import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className='bg-dark text-white mt-5 text-center py-3'>
            <p className='m-0'><small>Copyright &copy; {year}</small></p>
        </footer>
    );
};

export default Footer;