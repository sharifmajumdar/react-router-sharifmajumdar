import React from 'react';

const Footer = () => {
    return (
        <div className='row bg-light'>
            <div className='col-6 d-flex justify-content-center'>
                <div className='mt-4'>
                    <img src="fav.png" height="100px" width="100px" alt="" />
                </div>
                <div className='mt-5'>
                    <h1>SUOMEN KIELI OPPIA</h1>
                </div>                
            </div>
            <div className='col-6 contact' style={{paddingLeft: "500px"}}>
                <h4>Contact Information</h4>
                <p>Tel: +358442425130 <br />
                    Email: sharifmajumdar@gmail.com
                </p>
                <p>Suomen Kieli Oppia <br />
                    Latolankatu 9, Joensuu, Finland</p>
            </div>
        </div>
    );
};

export default Footer;