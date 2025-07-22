import LatestCourseList from "./latestCourseList";

export default function LatestCourse(){
    return(
        <div class="popularCourse">
            <div className="container">
            <div clas="heading">
                <div className="latestCourse"><img src="/img/latestCourseIcon.png" width="24" height="24" alt="Latest Course"/>Latest Course</div>
                <h2>Our Best Popular Course</h2>
                <p className="subheading">Take Your Career to unique height in this competitive job market.all the categories you need
are here. choose your most preferred course. </p>
            </div>
             <LatestCourseList />
            </div>
        </div>

    );
}