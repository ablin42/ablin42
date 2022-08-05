// @EXTERNALS
import React from "react";
// @COMPONENTS
// @MISC

const Contact = () => {
	return (
		<>
			<section className="section main-section even fp-auto-height-responsive" id="contact-section" data-anchor="contact">
				<div className="bg-clipper">
					{/* <h1 className="hero-title pt-5" data-animation="dropDownAnim">
						?%= text.contactTab.contact %?
					</h1>

					<form
						className="col-md-6 col-sm-8 offset-sm-2"
						id="contact-form"
						method="POST"
						data-animation="formAnim"
						action="/api/contact/"
					>
						<div className="row">
							<div className="col-md-12">
								<label className="control-label">?%= text.contactTab.email %?</label>
								<input placeholder="?%= text.contactTab.placeholderEmail %?" type="email" name="email" id="email" required />
							</div>
						</div>
						<div className="row mt-2">
							<div className="col-md-12">
								<label className="control-label">?%= text.contactTab.object %?</label>
								<input placeholder="?%= text.contactTab.placeholderObject %?" type="text" name="title" id="title" required />
							</div>
							<div className="col-md-12 mt-2">
								<label className="control-label">?%= text.contactTab.message %?</label>
								<textarea
									className="mb-0"
									id="content"
									rows={8}
									name="content"
									placeholder="?%= text.contactTab.placeholderMessage %?"
									required
								></textarea>
							</div>
						</div>

						<div className="submit-btn-wrapper">
							<span>?%= text.contactTab.send %?</span>
							<input type="submit" className="action-btn" value="?%= text.contactTab.send %?" id="submit-contact" />
						</div>
						<input type="hidden" name="_csrf" value="?%= csrfToken %?" />

						<div className="col-md-12 p-0 mt-3 contact-alert-wrapper">
							<div id="contact-alert"></div>
						</div>
					</form>

					<img
						src="/svg/undraw_messages.svg"
						className="contact-svg"
						alt="Message me Contact Illustration for freelance web developer fullstack"
						data-animation="contactSvgAnim"
						draggable="false"
					/>
					<div className="contact-footer">
						<ul>
							<li>
								<i className="fas fa-phone"></i> <span>+33 6 89 89 81 98</span>
							</li>
							<li>
								<span>freelance@ablin.dev </span>
								<i className="fas fa-envelope"></i>
							</li>
						</ul>
					</div> */}
				</div>
			</section>
		</>
	);
};

export default Contact;
