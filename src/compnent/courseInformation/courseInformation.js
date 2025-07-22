export default function CourseInformation(){
    return(
        <div className="couorseInfo">
            <div className="container">
                <div className="AboutCourse">
                    <ul className="Information">

                        <li className="OnlineCourse">
                            <img src="/img/Onlinecourse.png" height="40" width="40" alt="Online course"></img>
                            <h3>10K</h3>
                            <p>Online Course</p>
                        </li>

                        <li className="Instructor">
                            <img src="/img/Instructure.png" height="40" width="40" alt="Our Instructors"></img>
                            <h3>15K</h3>
                            <p>Our Instructors</p>
                        </li>

                        <li className="StudentLearning">
                            <img src="/img/StudentLearning.png" height="40" width="40" alt="Student Learning"></img>
                            <h3>25M</h3>
                            <p>Student Learning</p>
                        </li>

                        <li className="SuccessRate">
                            <img src="/img/successRate.png" height="40" width="40" alt="Success Rate"></img>
                            <h3>99%</h3>
                            <p>Success Rate</p>
                        </li>
                        
                    </ul>
                </div>


            </div>

        </div>

    );
}