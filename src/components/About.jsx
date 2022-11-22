import React from "react";


function About() {
    return(
    <div>

        {/* Entire About Section */}

        <section id="About">

            <div className="container-fluid">

                <div className="row">

                    <h1 className="icon-color"><u>About Me:</u></h1>

                </div>

                <div className="row">

                    {/* Summary Sub-Section */}

                    <div className="col-lg-4 about-section">
                        <div className="icon-color">

                            {/* Bootstrap Human Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>
                            <h2 className="about-title"><u>Summary:</u></h2>
                        </div>
                        <div>
                            <p className="about-par">I am an engineer with a mechanical engineering degree who has developed a passion to continuously learn and improve
                            new software development skills daily! In my free time, I enjoy hiking, traveling, and watching 
                            movies/shows with my family. In addition, I am a purple belt in brazilian jiu-jitsu and enjoy 
                            playing games with friends.</p>
                        </div>

                    </div>

                    {/* Philosophy Sub-Section */}

                    <div className="col-lg-4 about-section phil-section">
                        <div className="icon-color">

                            {/* Book Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                            </svg>
                            <h2 className="about-title"><u>Philosophy:</u></h2>
                        </div>
                        <div>
                            <dl>
                                <dt>"Consistency is more important than delayed perfection."</dt>
                                    <dd>- Mark Twain</dd>
                                <dt>"All things in moderation, including moderation."</dt>
                                    <dd>- Socrates (and my mother, as far back as I can remember)</dd>
                                <dt>Law of Parsiminy (or Ockham's Razor): "Entities are not to be multiplied without necessity.
                                The simplest answer is usully the correct one."</dt>
                                    <dd>- William of Ockham</dd>
                            </dl>
                        </div>
                        
                    </div>

                    {/* Credentials Sub-Section */}

                    <div className="col-lg-4 about-section">
                        <div className="icon-color">

                            {/* Graduation Hat Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16">
                            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
                            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
                            </svg>
                            <h2 className="about-title"><u>Credentials:</u></h2>
                        </div>
                        <div>
                            <p className="about-par">I graduated from the prestigious Samuel Ginn College of Engineering at Auburn University in 2013
                            with a Bachelors of Science in Mechanical Engineering. I am proud to be an alumni of this program, as it has been  
                            <a target="blank" href="https://eng.auburn.edu/news/2022/09/college-earns-top-usnews-rankings-again#:~:text=The%20publication%2C%20which%20ranks%20undergraduate,centered%20engineering%20experience%20in%20America."> ranked among the nation's top
                            35 public institutions for the 12th-consecutive year in a row.</a>
                            <br></br>
                            <br></br>
                            My most recent studies began in late 2021 with an 
                            <a target="blank" href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"> online Full-Stack bootcamp by Udemy. </a> 
                            This course has introduced me to many wed development concepts and techniques. I plan 
                            to complete this course and continue my path to grow in the software development world.</p>
                            <br></br>
                            <p><a href="./Images/MR_resume.pdf" download="mRogerResume">Click to download my resume!</a></p>
                        </div>
                        
                    </div>


                </div>

            </div>

        </section>
    </div>)
}

export default About;