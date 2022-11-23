import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';
import { useState, useEffect } from 'react';
import data from '../../data/Data.json';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Services = (props) => {
        const [courses, setCourses] = useState([]);
        const [select, setSelect] = useState([]);

        useEffect(() => {
            const savedCourse = getDatabaseCart();
            const courseKeys = Object.keys(savedCourse);

            const previousCourse = courseKeys.map(pckey => {
                const course = data.find(cr => cr.key === Number(pckey));
                return course;
            });
            setSelect(previousCourse);
        }, []);

        useEffect(() => {
            setCourses(data);
        }, [courses]);

        const addCourseHandler = (course) => {
            const newSelect = [...select, course];
            setSelect(newSelect);
            const sameCourse = newSelect.filter(cr => cr.key === course.key);
            const count = sameCourse.length;
            addToDatabaseCart(course.key, count);
        }
    return (
        <div className='row'>
            <div className="col-8">
                <h1 className='course-item'>Available courses are:</h1><br />
                {
                    courses && courses.map(course => 
                    <div className='course-item' key = {course.key}>
                        <h5>{course.title}</h5>
                        <small><b>Description: </b><span style={{textAlign: "justify"}}> {course.description}</span></small><br />
                        <small><b>Teacher:</b> {course.teacher}</small><br />
                        <small><b>Place:</b> {course.place}</small><br />
                        <small><b>Duration:</b> {course.duration}</small><br />
                        <small><b>Period:</b> {course.period}</small><br />           
                        <small><b>Price:</b> EUR{course.price}</small><br />
                        <small><b>Registration:</b> {course.registration}</small><br />
                        <button className='btn btn-primary'
                            onClick={() => addCourseHandler(course) }>
                                <FontAwesomeIcon icon={faHandPointer} /> Choose Course</button>
                    </div>)
                }
            </div>
            <div className='col-4'>
                <div>
                    <Cart cart = {select}>
                        <Link to="/review">
                            <button className='btn btn-primary'>
                                            <FontAwesomeIcon icon={faHandPointer} /> Review Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Services;