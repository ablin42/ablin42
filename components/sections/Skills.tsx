// @EXTERNALS
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCodeBranch, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
// @COMPONENTS
// @MISC

const TAGS = [
	{
		name: "react",
		type: "frontend",
		isFavorite: false
	},
	{
		name: "nextjs",
		type: "frontend",
		isFavorite: true
	},

	{
		name: "nodejs",
		type: "backend",
		isFavorite: true
	},
	{
		name: "mongodb",
		type: "data",
		isFavorite: true
	},
	{
		name: "sass",
		type: "frontend",
		isFavorite: false
	}
];

const PROJECTS = [
	{
		name: "maral.fr",
		stack: ["nodejs", "mongodb"],
		description: "blablablablablablablablalblalblaldlalps alsp lalsp aslpapsl paqsl apsla psl apslap sl ",
		github: "https://github.com",
		link: ""
	},
	{
		name: "xs-url.fr",
		stack: ["nodejs", "mongodb", "react", "sass"],
		description: "A really cool project to spoof & shorten your URLs ",
		github: "https://github.com",
		link: ""
	},
	{
		name: "maral.fr",
		stack: ["nodejs", "mongodb"],
		description: "blablablablablablablablalblalblaldlalps alsp lalsp aslpapsl paqsl apsla psl apslap sl ",
		github: "https://github.com",
		link: ""
	}
];

const SKILLS_LIST = TAGS.map(tag => tag.name);

const Skills = () => {
	const [search, setSearch] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [tags, setTags] = useState(TAGS);
	const [matchingProjects, setMatchingProjects] = useState(PROJECTS);

	const removeTag = (index: number) => {
		const newTags = [...tags];
		newTags.splice(index, 1);
		getMatchingProjects(newTags);
		setTags(newTags);
	};

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearch(value);

		const suggest = SKILLS_LIST.filter(skill => skill.indexOf(value) > -1);
		setSuggestions(suggest);
	};

	const addTag = (tagName: string) => {
		if (tags.find(tag => tag.name === tagName.toLowerCase())) return;

		let tag = TAGS.find(tag => tag.name === tagName.toLowerCase());
		if (!tag) {
			const suggest = SKILLS_LIST.filter(skill => skill.indexOf(tagName) > -1);
			if (suggest.length <= 0) return;
			tag = TAGS.find(tag => tag.name === suggest[0]);
		}
		const newTags = [...tags];
		newTags.push(tag);
		getMatchingProjects(newTags);
		setTags(newTags);
	};

	const getMatchingProjects = (tags: Array<any>) => {
		const tagStack = tags
			.map(tag => tag.name)
			.sort((a, b) => a.localeCompare(b))
			.toString();
		const match = PROJECTS.filter(project => {
			const projectStack = project.stack.sort((a, b) => a.localeCompare(b)).toString();
			return projectStack === tagStack;
		});

		setMatchingProjects(match);
	};

	const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
		console.log(e.keyCode);
		if (e.keyCode === 13 || e.keyCode === 9) addTag(search);
	};

	return (
		<>
			<section className="section main-section fp-auto-height-responsive" id="skills-section" data-anchor="skills">
				<div className="bg-clipper">
					<div className="container">
						<div className="col-8 m-auto mt-5">
							<div className="form-control">
								<input
									type="text"
									className="form-control"
									placeholder="input"
									value={search}
									onChange={e => handleSearch(e)}
									onKeyDown={e => handleKey(e)}
								/>
								<div className="mt-2">
									{suggestions.length > 0 && <span>Did you mean :</span>}
									{suggestions.map((tag, index) => (
										<span key={tag} className="badge bg-info m-1" style={{ cursor: "pointer" }} onClick={() => addTag(tag)}>
											{tag}
										</span>
									))}
									<br />
									{tags.map((tag, index) => (
										<span key={tag.name} className="badge bg-primary m-1">
											{tag.name}
											<b className="ms-2" style={{ color: "white", cursor: "pointer" }} onClick={() => removeTag(index)}>
												x
											</b>
										</span>
									))}
								</div>
							</div>
							{/* <input type="text" className="form-control" placeholder="input" /> */}
							<div className="mt-3">
								<div className="row">
									{matchingProjects.map(project => {
										const { name, stack, description, github, link } = project;
										return (
											<div key={name} className="col-4 ">
												<div className="rounded-2 p-3 " style={{ backgroundColor: "white" }}>
													<b>{name}</b>
													<p>{description}</p>

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
													<div className="d-flex justify-content-between align-items-center mt-4">
														<div>
															{stack.map(item => {
																return (
																	<span key={item} className="badge bg-primary m-1">
																		{item}
																	</span>
																);
															})}
														</div>
													</div>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>

					{/* <h1 className="hero-title pt-5 mb-0" data-animation="dropDownAnim">
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
					</div> */}
				</div>
			</section>
		</>
	);
};

export default Skills;
