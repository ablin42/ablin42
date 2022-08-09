// @EXTERNALS
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { Trans } from "react-i18next";
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
		description: <Trans>MaralSmallDescription</Trans>,
		github: "https://github.com",
		link: ""
	},
	{
		name: "xs-url.fr",
		stack: ["nodejs", "mongodb", "react", "sass"],
		description: <Trans>XsUrlSmallDescription</Trans>,
		github: "https://github.com",
		link: ""
	},
	{
		name: "maral.fr",
		stack: ["nodejs", "mongodb"],
		description: <Trans>MaralSmallDescription</Trans>,
		github: "https://github.com",
		link: ""
	}
];

const SKILLS_LIST = TAGS.map(tag => tag.name);

const Skills = () => {
	const [search, setSearch] = useState("");
	const [suggestions, setSuggestions] = useState<Array<string>>([]);
	const [tags, setTags] = useState<Array<any>>(TAGS);
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
				</div>
			</section>
		</>
	);
};

export default Skills;
