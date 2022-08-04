// @EXTERNALS
import React from "react";
// @COMPONENTS
// @MISC

// TODO see about bullvsbear
const Landing = () => {
	return (
		<>
			<section className="section main-section hero fp-auto-height-responsive" id="landing-section" data-anchor="landing">
				<div className="bg-clipper">
					<nav className="navbar navbar-dark pt-4">
						<a className="navbar-brand" href="#">
							ablin@dev
						</a>

						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link" href="https://www.linkedin.com/in/ablin42/" target="_blank">
									<i className="fa fa-linkedin" aria-hidden="true"></i>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="https://www.github.com/ablin42" target="_blank">
									<i className="fa fa-github" aria-hidden="true"></i>
								</a>
							</li>
						</ul>
					</nav>

					<h3 className="col-md-8" data-animation="dropDownAnim">
						?%= text.pres1 %?{" "}
						<b>
							{" "}
							<i>{`{`}</i>?%= text.pres2 %?<i>{"}"}</i>{" "}
						</b>{" "}
						?%= text.pres3 %?
					</h3>
					<h1 className="hero-title" data-animation="dropDownAnim">
						Andréas Blin
					</h1>
					<h2 className="hero-secondary-title col-xl-6 offset-xl-1">
						<i>❝?%= text.quote %?❞</i>
					</h2>

					<div className="call-wrapper offset-md-3 offset-sm-2 offset-xs-1">
						<a href="#portfolio" className="action-link portfolio-link" data-animation="portfolioLinkAnim">
							Portfolio
						</a>
						<div className="scroll-indicator" data-animation="indicatorAnim"></div>
					</div>

					<img
						src="/svg/undraw_freelancer.svg"
						className="freelancer-svg"
						alt="Freelance Illustration For Fullstack Web Developer"
						data-animation="freelancerAnim"
						draggable="false"
					/>
				</div>
			</section>
		</>
	);
};

export default Landing;
