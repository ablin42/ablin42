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
								<p className="ms-1">
									<Trans>OneLiner</Trans>
								</p>
							</div>
							<div className="row">
								<div className="row align-items-center">
									<div className="col-lg-4">
										<img alt="0xHarb" src="/0xharb3.jpg" className="profile-img" width="100%" />
									</div>

									<div className="col-lg-8">
										<p className="paragraph">
											<Trans>Intro</Trans>
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
												<span className="tooltiptextSpecial">
													<Trans>Clipboard</Trans>
												</span>
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
				</div>
			</section>
		</>
	);
};

export default Landing;
