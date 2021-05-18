import React from 'react';
// import ReactDOM from "react-dom";


function Home() {
    return (
        <div className="home">
            <header id="showcase" class="grid">
                <div class="bg-image">
                    <img alt="websiteHeader" src="./images/websiteHeader.png"/>
                </div>
                <div class="content">
                    <h1>ALTRUIST</h1> 
                    <p>Why To Hoard When We Can Reuse !!</p>
                </div>
            </header>
    {/* <!--main area--> */}
        <main id="main">
            {/* <!--section1--> */}
            <section id="section1" class="grid">
                <div class="content">
                <h2 class="content-title">WHAT WE DO</h2>
                <div class="content-text">
                    <div class="vision">
                        <h4>Vision:</h4>
                        <p>To connect society and build a platform in which people live with benevolence.</p>
                    </div>
                    <div class="aim">        
                        <h4>Aim:</h4>
                        
                        <ul>
                            <li>Our Mission is to provide Complete Product Reusability which is more affordable and to form a society which is interactive and productive.</li>
                            <li>To help organizing events.</li>
                        <li>
                        Provide a helping hand by connecting to NGOs.</li>
                        </ul>
                        </div>
                </div>
                </div>
            </section>
            {/* <!--section2--> */}
            <section id="section2" class="grid">
                <ul>
                    <li>
                       <div class="card">
                          <img src="./images/teaching.jpg" alt="teaching"/> 
                          <div class="card-content content1">
                              <h3 class="card-title">Teaching</h3>
                              <p>Classes, Meets can be organized such that people irrespective of age can be Engaged and hidden Talents are Discovered.</p>
                          </div>
                       </div> 
                    </li>
                    <li>
                       <div class="card">
                            <img alt="serving" src="./images/serving.jpg"/>
                            <div class="card-content content2">
                                <h3 class="card-title">Service</h3>
                                <p>People can Drop the products they have as an Extra so that others can use things they wish and return it back to them. See how much you are saving from borrowing instead of buying.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <img alt="event" src="./images/event.jpg"/>
                            <div class="card-content">
                                <h3 class="card-title content3">Event</h3>
                                <p>By lending out useful Things, we host a range of events that mainly focus on helping people learn new skills or sharing skills.<br/>
                                Gathering can be done, communicated and planned.<br/>
                                Organization of work can be done<br/>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            {/* <!--section3--> */}
            <section id="section3" class="grid">
                <div class="content">
                    <h3 class="content-title">IMPACT</h3>
                </div>
                <div class="content-text">
                    <p>This is to build a Society which has a good intension to help Society and upbringing the Nation.</p>
                </div>
            </section>
			<section id="section5">
				<div>
					<h2>Get Involved</h2>
					<p>Events<br/>
                        NGO Activities<br/> 
                        Volunteering<br/>
                        Organizing<br/>
                        Chat and Enjoy
                    </p>
				</div>
			</section>
            {/* <!--section4--> */}
            <section id="section4" class="grid">
            </section>
        </main>
        {/* <!--footer--> */}
            <footer id="footer" class="grid">
                <div><sup>&copy;</sup> copyrights</div>
                <div>
                    Project by
                    <a href="https://www.w3schools.com">Brute Force</a>
                </div>
            </footer>
        </div>
    );
}

export default Home;