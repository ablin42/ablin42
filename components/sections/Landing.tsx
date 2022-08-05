// @EXTERNALS
import React from "react";
import Head from "next/head";
import { Trans } from "react-i18next";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

// @COMPONENTS
// @MISC

{
	/* <Trans>Welcome to React</Trans> */
}

const Landing = () => {
	const handleClipboard = (ADDRESS: string) => {
		const tooltip = document.querySelector(`#harb > .tooltiptextSpecial`);

		if (tooltip && !tooltip.classList.contains("tooltip-visible")) {
			tooltip.classList.add("tooltipAnim");
			tooltip.classList.add("tooltip-visible");
			setTimeout(() => {
				if (tooltip) {
					tooltip.classList.remove("tooltip-visible");
					tooltip.classList.remove("tooltipAnim");
				}
			}, 3000);
		}

		navigator.clipboard.writeText(ADDRESS);
	};
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

					<div className="container">
						<div className="col-8 m-auto container-decorated shadow-lg" id="introduction">
							<h1 className="mb-3 text-main">
								~/0xHarb <FontAwesomeIcon className="fa-icon ms-3 me-3" icon={faTerminal} fontSize={30} /> Fullstack Developer
							</h1>
							<div className="row">
								<p className="ms-1">Im a software engineer &amp; crypto enjoyooor that loves to experiment</p>
							</div>
							<div className="row">
								<div className="row align-items-center">
									<div className="col-lg-4">
										<img alt="0xHarb" src="/0xharb3.jpg" className="profile-img" width="100%" />
									</div>

									<div className="col-lg-8">
										<p className="paragraph">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus posuere metus, tincidunt
											pellentesque quam mattis vitae. Donec ullamcorper ipsum nibh, vel efficitur ante congue eget. Duis ut ligula
											ipsum. Ut eu pellentesque orci. Sed accumsan iaculis ex, ut venenatis lectus tristique congue. Cras
											venenatis sit amet sem vel tincidunt. Aenean facilisis in sem in pretium. Pellentesque quis quam id diam
											aliquam accumsan ac a ante. Nam vel placerat ipsum.
										</p>
									</div>
								</div>
								<div className="row col-lg-12 justify-content-end">
									<div className="text-end w-auto">
										<a className="m-2" target="_blank" rel="noreferrer" href="https://github.com/ablin42">
											<FontAwesomeIcon className="fa-icon" icon={faGithub} fontSize={30} />
										</a>
										<a className="m-2" target="_blank" rel="noreferrer" href="https://twitter.com/0xharb">
											<FontAwesomeIcon className="fa-icon" icon={faTwitter} fontSize={30} />
										</a>
										<a className="m-2 " href="#">
											<FontAwesomeIcon
												className="fa-icon"
												icon={faEthereum}
												fontSize={30}
												onClick={() => handleClipboard("0xCC61d2bb1A215f19922eCF81613bEa3253713371")}
											/>
											<div className="tooltipSpecial" id="harb">
												<span className="tooltiptextSpecial">Copied to clipboard!</span>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="d-flex justify-content-center mt-3">
							<img src="/scroll-indicator.gif" alt="try scrolling" width="75px" />
						</div>
					</div>

					{/* <h3 className="col-md-8" data-animation="dropDownAnim">
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
					/> */}
				</div>
			</section>
		</>
	);
};

export default Landing;
