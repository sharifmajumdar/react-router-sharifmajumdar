import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='row bg-info h-25 w-100 p-3'>
            <div className='d-flex col-6 justify-content-around'>
                <h1>SUOMEN KIELI OPPIA</h1>
            </div>
            <div className='d-flex col-6 justify-content-around'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href='/'>Home</a>
                            <a className="nav-item nav-link active" href={`/services`}>Services</a>
                            <a className="nav-item nav-link active" href='/guidelines'>Guidelines</a>
                            <a className="nav-item nav-link active" href='/about'>About</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;