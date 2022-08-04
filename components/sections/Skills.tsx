// @EXTERNALS
import React from "react";
// @COMPONENTS
// @MISC

const Skills = () => {
	return (
		<>
			<section className="section main-section fp-auto-height-responsive" id="skills-section" data-anchor="skills">
				<div className="bg-clipper">
					<h1 className="hero-title pt-5 mb-0" data-animation="dropDownAnim">
						?%= text.skills %?
					</h1>

					<div className="skill-content col-md-10 p-3">
						<p className="skills-text">
							{`{`} ?%= text.skillsTab.nonExhaustive %? {`}`}
						</p>
						<div className="skills-section">
							<h2>Front-end</h2>
							<div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 skills-wrapper">
								<h1 data-animation="leftBracketAnim">{`{`}</h1>
								<div className="wrapper-icon">
									<div>
										<img
											className="skill-icon"
											src="/img/icons/white/javascript_icon.png"
											alt="Javascript JS"
											draggable="false"
										/>
									</div>
									<label>Javascript</label>
								</div>
								<div className="wrapper-icon">
									<div>
										<img className="skill-icon" src="/img/icons/white/jquery_icon.png" alt="JQuery" draggable="false" />
									</div>
									<label>JQuery</label>
								</div>
								<div className="wrapper-icon">
									<div>
										<img className="skill-icon" src="/img/icons/white/html_icon.png" alt="HTML5 HTML" draggable="false" />
									</div>
									<label>HTML5</label>
								</div>
								<div className="wrapper-icon">
									<div>
										<img className="skill-icon" src="/img/icons/white/css_icon.png" alt="CSS3 CSS" draggable="false" />
									</div>
									<label>CSS3</label>
								</div>
								<div className="wrapper-icon">
									<div>
										<img className="skill-icon" src="/img/icons/white/sass_icon.png" alt="SASS" draggable="false" />
									</div>
									<label>SASS</label>
								</div>
								<div className="wrapper-icon">
									<div>
										<img className="skill-icon" src="/img/icons/white/vuejs_icon.png" alt="Vuejs Vue.js" draggable="false" />
									</div>
									<label>Vue.js</label>
								</div>
								<div className="wrapper-icon">
									<div>
										<img className="skill-icon" src="/img/icons/white/bootstrap_icon.png" alt="Bootstrap" draggable="false" />
									</div>
									<label>Bootstrap</label>
								</div>
								<h1 data-animation="rightBracketAnim">{"}"}</h1>
							</div>
						</div>

						<div className="skills-section">
							<h2>Back-end</h2>
							<div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 skills-wrapper">
								<h1 data-animation="leftBracketAnim">{`{`}</h1>
								<div className="wrapper-icon">
									<div>
										<img className="skill-icon" src="/img/icons/white/nodejs_icon.png" alt="NodeJS Node.js" draggable="false" />
									</div>
									<label>NodeJS</label>
								</div>
								<div className="wrapper-icon">
									<div>
										<img className="skill-icon" src="/img/icons/white/php_icon.png" alt="PHP" draggable="false" />
									</div>
									<label>PHP</label>
								</div>
								<div className="wrapper-icon">
									<div>
										<img
											className="skill-icon"
											src="/img/icons/white/database_icon.png"
											alt="Database SQL NoSQL"
											draggable="false"
										/>
									</div>
									<label>SQL / noSQL</label>
								</div>
								<div className="wrapper-icon">
									<div>
										<img className="skill-icon" src="/img/icons/white/api_icon.png" alt="API" draggable="false" />
									</div>
									<label>API</label>
								</div>
								<div className="wrapper-icon">
									<div>
										<img
											className="skill-icon"
											src="/img/icons/white/s3_icon.png"
											alt="AWS AMAZON WEB SERVICE S3"
											draggable="false"
										/>
									</div>
									<label>S3</label>
								</div>
								<h1 data-animation="rightBracketAnim">{"}"}</h1>
							</div>
						</div>

						<div className="skills-section">
							<h2>?%= text.skillsTab.misc %?</h2>
							<div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 skills-wrapper">
								<h1 data-animation="leftBracketAnim">{`{`}</h1>
								<div className="wrapper-icon">
									<div>
										<img className="skill-icon" src="/img/icons/white/git_icon.png" alt="Git" draggable="false" />
									</div>
									<label>Git</label>
								</div>
								<div className="wrapper-icon">
									<div>
										<img className="skill-icon" src="/img/icons/white/docker_icon.png" alt="Docker" draggable="false" />
									</div>
									<label>Docker</label>
								</div>

								<div className="wrapper-icon">
									<div>
										<img className="skill-icon" src="/img/icons/white/console_icon.png" alt="Shell" draggable="false" />
									</div>
									<label>Shell</label>
								</div>
								<h1 data-animation="rightBracketAnim">{"}"}</h1>
							</div>
						</div>
						<a href="#contact" className="action-link m-auto">
							?%= text.contactTab.contactMe %? !
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default Skills;
