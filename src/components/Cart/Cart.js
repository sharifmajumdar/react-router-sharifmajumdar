import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    let courseTitle = [""];
    let numberOfCourses = 0;
    let msg = "";
    let msg2 = "";

    cart.map(course => 
        numberOfCourses >= 6? msg = "You can not select more than 6 courses!!!" :
        courseTitle.includes(course.title)? msg2 = "Same course can not added twice!!!" : 
            (numberOfCourses += 1,
            total = total + Number(course.price),
            courseTitle = courseTitle + numberOfCourses + (". ") + course.title + (" "))
        )

    return (
        <div>
            <h3>Cart Summary</h3>
            <small><b>Course Selected: </b>{numberOfCourses}</small><br />
            <small><b>Total Price: </b> EUR{total}</small><br />
            <small><b>Course List:</b> {courseTitle}</small> <br /><br />
            <div>
                {
                    props.children
                }              
            </div> <br />
            <span>{msg}</span><br />
            <span>{msg2}</span>
        </div>
    );
};

export default Cart;