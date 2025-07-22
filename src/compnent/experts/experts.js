export default function Experts(){
    return(
        <div className="experts">
            <div className="container">
                <div className="mentors">
                    <div className="mentorMeet">
                        <h2>Meet With Our Expert Mentors</h2>
                        <p>Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. duis enim velit mollit.<br></br>Exercitation veniam consequat.</p>

                    </div>

                    <div className="Image">
                        <ul className="mentorImage">
                            <li>
                                <img src="/img/mentor1.png" height="275" width="275" alt="mentor1"></img>

                            </li>

                            <li>
                                <img src="/img/mentor2.png" height="275" width="275" alt="mentor1"></img>

                            </li>

                            <li>
                                <img src="/img/mentor3.png" height="275" width="275" alt="mentor1"></img>

                            </li>

                            <li>
                                <img src="/img/mentor4.png" height="275" width="275" alt="mentor1"></img>

                            </li>
                        </ul>

                        <div className="ExpertMentors">
                        <button className="expertButton">Expert Mentors
                             <img src="/img/arrowWhite.png" height="20" width="30" alt="Arrow"></img>
                        </button>

                    </div>
                    </div>
                </div>
            </div>

        </div>
    );
}