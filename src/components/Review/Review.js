import React, { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import data from '../../data/Data.json';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const removeCourse = (courseKey) => {
        const newCart = cart.filter(cr => cr.key !== courseKey);
        setCart(newCart);
        removeFromDatabaseCart(courseKey);
    };

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const courseKeys = Object.keys(savedCart);

        const cartCourses = courseKeys.map(key => {
            const course = data.find(cr => cr.key === Number(key));
            return course;
        });
        setCart(cartCourses);
    }, []);

    return (
        <div className='row'>
            <div className="col-8">
                {
                    cart.map(cr => <ReviewItem 
                        key = {cr.key}
                        course = {cr}
                        removeCourse = {removeCourse}></ReviewItem>)
                }
                { orderPlaced && <h1 style={{marginLeft: "250px", color: "green"}}>Order has been placed!!!</h1> }
                { cart.length < 1 && orderPlaced === false? <h1 style={{marginLeft: "250px", color: "red"}}>No item selected yet! Please choose an item</h1>:null}
            </div>
            <div className='col-4'>
                <div>
                    <Cart cart = {cart}>
                        {
                            cart.length >=1 && orderPlaced === false?
                                <button type="button" onClick={handlePlaceOrder} className='btn btn-primary place-button'>
                                    <FontAwesomeIcon icon={faHandPointer} />
                                    <Link style={{textDecoration: "none", color: "white"}}  to={`/review`}>Place Order</Link>
                                </button>:null
                        }
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Review;