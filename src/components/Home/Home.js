import React, { useContext } from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import { CourseContext } from '../../App';

const Home = () => {
    const [courses] = useContext(CourseContext);
    return (
        <div className='row d-flex'>
            <div className='col-8'>
                <h1 className='article-text1'>Welcome to Suomen kieli!</h1>
                <p className='article-text1'>
                    The courses normally meet as face-to-face teaching, taking health and safety instructions into account. 
                </p>
                <article className='article-text1'>
                    Registration for basic finnish education for the academic year 2022-2023: The courses for the 2022-2023 academic year of basic finnish education have been published and registration has started on October, 2022. You can inquire about free student places in the fall. Vacant student places: tel. 044 242 5130 / Eshia Farnaj, Mon-Thurs from 9 am to 4 pm and Fri from 9 am to 2 pm. Joensuu region's suomen oppia offers children and young people between the ages of 4 and 20 suomea with a wide curriculum in Joensuu, as well as general curriculum studies in Kontiolahti, Liperi, Outokummu, Polvijärvi, Tuupovaara, Kiihtelysvaara and Pyhäselä. Students are accepted into groups in order of registration. Basic teaching of suomea: Vacant pupil places online and from the customer service number. Registration for the family group opens on Monday, October at 9:30 a.m. Joensuu region's suomen oppia offers children and young people aged 4-20 general curriculum studies in theater and verbal arts in its entire operating area, as well as general curriculum studies in Joensuu. Students are accepted into groups in order of registration.
                </article>
                <article className='article-text1'>
                    <b>Registration </b>
                    Register no later than 7 days before the start of the course by phone or online. If the course is already running and there is room, you can also register for it in the middle of the season. The college does not send a separate reminder about the start of the course. We will only contact you if the course is canceled or you have received a student place from a reserve.
                </article>
                <article className='article-text1'>
                    <b style={{color: "red"}}>Corona info </b> 
                    Please note these exceptions when registering:
                    Switching to distance learning or rescheduling the course:  It is possible that due to the pandemic situation, teaching will be moved from face-to-face teaching to distance teaching in the middle of the term or the start time will have to be changed. If the course moves to distance learning, it does not entitle the course to be canceled free of charge. Please note this when registering. 
                    Getting sick with corona virus or other illness: If the participant himself gets sick with coronavirus disease, it does not entitle the course to be canceled free of charge, except with a doctor's certificate about the long-term duration of the illness. In cases of illness, the instructions of the health authorities are followed, e.g. regarding quarantine.
                </article>
                <p className='article-text1'><b>Contact information: </b>
                    <span> 
                        Suomen Kieli Oppia
                        Latolankatu 9, 80160 Joensuu
                        Customer service phone 044 242 5130
                    </span>
                </p>
            </div>
            <div className='home-courses col-4 item-container'>
                <h2 className='home-courses'><u> Available courses</u></h2> <br />
                {
                    courses && courses.slice(0, 4).map(course => 
                            <div className="course" key={course.key}>
                                <div className='course-name d-flex justify-content-start'>
                                    <h6>{course.title}</h6>
                                    <small><b>Teacher</b> <br /> {course.teacher}</small><br />
                                    <small><b>Duration</b> {course.duration}</small><br />           
                                    <small><b>Price</b> EUR{course.price}</small><br />
                                    <small>Registration: {course.registration}</small><br />
                                    <button className='btn btn-info'>
                                        <Link style={{textDecoration: "none", color: "white"}}  to={`/services`}>Click here for details</Link>
                                    </button>
                                </div>
                            </div>)
                }
                <p> <Link to={`/services`}>Find more courses...</Link></p>
            </div>
        </div>
    );
};

export default Home;