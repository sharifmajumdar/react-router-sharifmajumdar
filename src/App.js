import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState, useEffect, createContext } from 'react';
import data from './data/Data';
import Home from './components/Home/Home';
import About from './components/About/About';
import Guidelines from './components/Guidelines/Guidelines';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NoMatch from './components/NoMatch/NoMatch';
import Review from './components/Review/Review';

export const CourseContext = createContext();

function App() {
  const [courses, setCourses] = useState([]);
    useEffect(() => {
        setCourses(data);
    }, [courses]);
  return (
    <CourseContext.Provider value={[courses, setCourses]}>
      <Header/>
      <Router>
        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/about" element={<About />} />
            <Route path="/review" element={<Review />} />
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </Router>
      <Footer/>
    </CourseContext.Provider>
  );
}

export default App;
