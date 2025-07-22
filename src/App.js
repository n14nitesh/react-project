import Header from './compnent/header/header';
import Banner from './compnent/banner/banner';
import './App.css';
import Xyx from './compnent/xyz/xyz';
import Category from './compnent/category/category';
import LatestCourse from './compnent/latestCourse/latestCourse';
import CourseInformation from './compnent/courseInformation/courseInformation';
import BestCourse from './compnent/bestCourse/bestCourse';
import Ourcourse from './compnent/ourcourses/ourcourses';
import Experts from './compnent/experts/experts';
import AboutDevlopment from './compnent/aboutDevlopment/aboutDevlopment';
import Subscribe from './compnent/subscribe/subscribe';
import StudentReview from './compnent/studentReview/studentReview';
import LearningCommunity from './compnent/learningCommunity/learningCommunity';
function App() {
  return (
    <div className="App">
     <Header title='Mahi' />
     <Banner />
     <Category />
     <LatestCourse />
     <BestCourse />
     <Ourcourse />
     <CourseInformation />
     <Experts />
     <AboutDevlopment />
     <Subscribe />
     <StudentReview />
     <LearningCommunity />
     <Xyx />
    </div>
  );
}

export default App;
