// @EXTERNALS
import React, { useState } from "react";
import styled, { StyledComponent } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCodeBranch, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
// @COMPONENTS
// @MISC

const ProjectItem = styled.div`
	color: white;
	background-color: #181818;
	height: 260px;
	padding: 20px 30px 20px 35px;
	box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 25%) !important;
	border: 5px solid #1a1a1a !important;
	position: relative;
`;
const Menu: StyledComponent<any> = styled.div`
	position: absolute;
	right: ${({ attachRight }: any) => (attachRight ? "-30px" : "auto")};
	left: ${({ attachRight }: any) => (attachRight ? "auto" : "-30px")};
	padding: 5px;
	background-color: #33a1fd;
	border-radius: 15px;
`;

const Portfolio = () => {
	const [open, setOpen] = useState<number | null>(null);

	return (
		<>
			<section className="section main-section even fp-auto-height-responsive" id="portfolio-section" data-anchor="portfolio">
				<div className="bg-clipper">
					<div className="">
						<div className="container test mt-5 pt-5 pb-5">
							<div className="col-8 m-auto mt-5">
								<div className="row mb-4">
									<div className="col-6">
										<ProjectItem className="project-item" style={{ borderRadius: "10px 10px 50px 10px" }}>
											<Menu className="d-flex flex-column shadow-sm">
												<FontAwesomeIcon
													className="fa-icon clickable-icon p-2"
													fontSize={25}
													icon={faLayerGroup}
													color="#121212"
													onClick={() => setOpen(open === 1 ? null : 1)}
												/>
												{open === 1 && (
													<>
														<FontAwesomeIcon
															className="fa-icon  clickable-icon p-2"
															fontSize={25}
															icon={faArrowUpRightFromSquare}
															style={{ cursor: "pointer" }}
															color="#121212"
														/>
														<FontAwesomeIcon
															className="fa-icon  clickable-icon p-2"
															fontSize={25}
															icon={faCodeBranch}
															style={{ cursor: "pointer" }}
															color="#121212"
														/>
													</>
												)}
											</Menu>
											<div className="d-flex align-items-center mb-1">
												<h1>Dungeon Defenders</h1>
											</div>
											<p>
												An awesome project involving blockchain, gaming, and awesome devs lorem ipsum dolor sit amet lorem ipsum
												dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
											</p>

											<div className="d-flex justify-content-between align-items-center mt-4">
												<div>
													<span className="badge bg-primary m-1">React</span>
													<span className="badge bg-primary m-1">Node</span>
													<span className="badge bg-primary m-1">Solidity</span>
												</div>
											</div>
										</ProjectItem>
									</div>
									<div className="col-6">
										<ProjectItem className="project-item" style={{ borderRadius: "10px 10px 10px 50px" }}>
											<Menu className="d-flex flex-column shadow-sm" attachRight>
												<FontAwesomeIcon
													className="fa-icon clickable-icon p-2"
													fontSize={25}
													icon={faLayerGroup}
													color="#121212"
													onClick={() => setOpen(open === 2 ? null : 2)}
												/>
												{open === 2 && (
													<>
														<FontAwesomeIcon
															className="fa-icon  clickable-icon p-2"
															fontSize={25}
															icon={faArrowUpRightFromSquare}
															style={{ cursor: "pointer" }}
															color="#121212"
														/>
														<FontAwesomeIcon
															className="fa-icon  clickable-icon p-2"
															fontSize={25}
															icon={faCodeBranch}
															style={{ cursor: "pointer" }}
															color="#121212"
														/>
													</>
												)}
											</Menu>
											<div className="d-flex align-items-center mb-1">
												<h1>chaproulette</h1>
											</div>
											<p>
												An awesome project involving blockchain, gaming, and awesome devs lorem ipsum dolor sit amet lorem ipsum
												dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
											</p>

											<div className="d-flex justify-content-between align-items-center">
												<div>
													<span className="badge bg-primary m-1">React</span>
													<span className="badge bg-primary m-1">Node</span>
													<span className="badge bg-primary m-1">Solidity</span>
												</div>
											</div>
										</ProjectItem>
									</div>
								</div>
								<div className="row">
									<div className="col-6">
										<ProjectItem className="project-item" style={{ borderRadius: "10px 50px 10px 10px" }}>
											<Menu className="d-flex flex-column shadow-sm">
												<FontAwesomeIcon
													className="fa-icon clickable-icon p-2"
													fontSize={25}
													icon={faLayerGroup}
													color="#121212"
													onClick={() => setOpen(open === 3 ? null : 3)}
												/>
												{open === 3 && (
													<>
														<FontAwesomeIcon
															className="fa-icon  clickable-icon p-2"
															fontSize={25}
															icon={faArrowUpRightFromSquare}
															style={{ cursor: "pointer" }}
															color="#121212"
														/>
														<FontAwesomeIcon
															className="fa-icon  clickable-icon p-2"
															fontSize={25}
															icon={faCodeBranch}
															style={{ cursor: "pointer" }}
															color="#121212"
														/>
													</>
												)}
											</Menu>
											<div className="d-flex align-items-center mb-1">
												<h1>bullvsbear</h1>
											</div>
											<p>
												An awesome project involving blockchain, gaming, and awesome devs lorem ipsum dolor sit amet lorem ipsum
												dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
											</p>

											<div className="d-flex justify-content-between align-items-center">
												<div>
													<span className="badge bg-primary m-1">React</span>
													<span className="badge bg-primary m-1">Node</span>
													<span className="badge bg-primary m-1">Solidity</span>
												</div>
											</div>
										</ProjectItem>
									</div>
									<div className="col-6">
										<ProjectItem className="project-item" style={{ borderRadius: "50px 10px 10px 10px" }}>
											<Menu className="d-flex flex-column shadow-sm" attachRight>
												<FontAwesomeIcon
													className="fa-icon clickable-icon p-2"
													fontSize={25}
													icon={faLayerGroup}
													color="#121212"
													onClick={() => setOpen(open === 4 ? null : 4)}
												/>
												{open === 4 && (
													<>
														<FontAwesomeIcon
															className="fa-icon  clickable-icon p-2"
															fontSize={25}
															icon={faArrowUpRightFromSquare}
															style={{ cursor: "pointer" }}
															color="#121212"
														/>
														<FontAwesomeIcon
															className="fa-icon  clickable-icon p-2"
															fontSize={25}
															icon={faCodeBranch}
															style={{ cursor: "pointer" }}
															color="#121212"
														/>
													</>
												)}
											</Menu>
											<div className="d-flex align-items-center mb-1">
												<h1>xs-url</h1>
											</div>
											<p>
												An awesome project involving blockchain, gaming, and awesome devs lorem ipsum dolor sit amet lorem ipsum
												dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
											</p>

											<div className="d-flex justify-content-between align-items-center mt-4">
												<div>
													<span className="badge bg-primary m-1">React</span>
													<span className="badge bg-primary m-1">Node</span>
													<span className="badge bg-primary m-1">Solidity</span>
												</div>
											</div>
										</ProjectItem>
									</div>
									{/* <div className="col-4">
									<ProjectItem className="shadow-lg rounded-2">
										<h1>Dungeon Defenders</h1>
									</ProjectItem>
								</div>
								<div className="col-4">
									<ProjectItem className="shadow-lg rounded-2">
										<h1>Dungeon Defenders</h1>
									</ProjectItem>
								</div> */}
								</div>
							</div>
						</div>
						{/* <div className="slide" id="xs-url">
						<div className="portfolio-item row">
							<div className="portfolio-thumbnail-wrapper p-0">
								<a href="http://www.xs-url.fr" target="_blank" data-animation="iphoneAnim" className="iphoneVert">
									<img
										src="/img/iphone7url.png"
										alt="Xs-url Xs url shortener service screenshot"
										draggable="false"
										className="iphone-class vertical"
									/>
								</a>
								<a href="http://www.xs-url.fr" target="_blank" data-animation="iphoneAnim" className="iphoneSide">
									<img
										src="/img/iphone7urlside.png"
										alt="Xs-url Xs url shortener service screenshot horizontal"
										draggable="false"
										className="iphone-class"
									/>
								</a>
							</div>

							<div className="portfolio-info">
								<h1 className="hero-title mt-4 mb-0 col-12" data-animation="dropDownAnim">
									<a href="http://www.xs-url.fr" target="_blank">
										Xs Url
									</a>
								</h1>

								<p>
									?%= text.xs.p1 %? <b>?%= text.xs.shortener %?</b> ?%= text.xs.p2 %? <b>?%= text.spoofing %?</b> ?%= text.xs.p3
									%? <b>URL</b>.
								</p>
								<p>
									?%= text.xs.p4 %? <b>?%= text.CustomCSS %?</b>. ?%= text.xs.p5 %? <b>NodeJS</b> ?%= text.xs.p6 %? <b>API</b> ?%=
									text.xs.p7 %?.
								</p>
								<p className="last">
									?%= text.xs.last %? <b>?%= text.lightmode %?</b> ?%= text.xs.last2 %? <b>?%= text.darkmode %?</b> ?%=
									text.xs.last3 %?!
								</p>

								<div className="skills-used-large">
									<ul>
										<li>NodeJS</li>
										<li>API</li>
										<li>?%= text.CustomCSS %?</li>
										<li>Javascript</li>
									</ul>
									<div className="skill-call-wrapper">
										<a href="#skills" className="action-link m-auto">
											{" "}
											?%= text.skills %?{" "}
										</a>
									</div>
								</div>
							</div>
						</div>
					</div> */}

						{/* <div className="slide" id="maral">
						<div className="portfolio-item row">
							<div className="portfolio-thumbnail-wrapper p-0">
								<a href="https://www.maral.fr" target="_blank" data-animation="iphoneAnim" className="iphoneVert">
									<img
										src="/img/iphone7.png"
										alt="Maral Art Paintings screenshot"
										draggable="false"
										className="iphone-class vertical"
									/>
								</a>
								<a href="https://www.maral.fr" target="_blank" data-animation="iphoneAnim" className="iphoneSide">
									<img
										src="/img/iphone7side.png"
										alt="Maral Art Paintings screenshot horizontal"
										draggable="false"
										className="iphone-class"
									/>
								</a>
							</div>

							<div className="portfolio-info">
								<h1 className="hero-title mt-4 mb-0 col-12" data-animation="dropDownAnim">
									<a href="https://www.maral.fr" target="_blank">
										Maral
									</a>
								</h1>

								<p>
									?%= text.maral.p1 %? <b>e-commerce</b> ?%= text.maral.p2 %?{" "}
									<b>
										<a href="https://pwinty.com/" target="_blank">
											?%= text.pwinty %?
										</a>
									</b>{" "}
									?%= text.maral.p3 %?
									<b>
										<a href="https://stripe.com/" target="_blank">
											?%= text.stripe %?
										</a>
									</b>
									.
								</p>
								<p>
									?%= text.maral.p4 %?{" "}
									<b>
										<a href="https://getbootstrap.com/" target="_blank">
											Bootstrap
										</a>
									</b>{" "}
									?%= text.maral.p5 %? <b>CSS</b> ?%= text.maral.p6 %? <b>NodeJS</b> ?%= text.maral.p7 %?
									<b>?%= text.CustomAPI %?</b> ?%= text.maral.p8 %?.
								</p>
								<p className="last">?%= text.maral.last %?.</p>

								<div className="skills-used-large">
									<ul>
										<li>NodeJS</li>
										<li>API</li>
										<li>Pwinty</li>
										<li>Stripe</li>
										<li>Bootstrap</li>
									</ul>
									<div className="skill-call-wrapper">
										<a href="#skills" className="action-link m-auto">
											?%= text.skills %?
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="slide">
						<div className="portfolio-item row">
							<div className="portfolio-thumbnail-wrapper p-0">
								<a href="http://www.xs-url.fr" target="_blank" data-animation="iphoneAnim" className="iphoneSide">
									<img src="/img/iphone7urlside.png" draggable="false" className="iphone-class" />
								</a>
								--{">"}
							</div>

							<div className="portfolio-info">
								<h1 className="hero-title mt-4 mb-0 col-12" data-animation="dropDownAnim">
									<a href="http://www.xs-url.fr" target="_blank">
										Covid Tracker
									</a>
								</h1>
								<h2 className="text-center">?%= text.coming %?..?</h2>

								<div className="skills-used-large"></div>
							</div>
						</div>
					</div> */}
					</div>
				</div>
			</section>
		</>
	);
};

export default Portfolio;
