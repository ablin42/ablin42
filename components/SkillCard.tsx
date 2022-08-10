// @EXTERNALS
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCodeBranch, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
// @COMPONENTS
// @MISC

interface CardProps {
	name: string;
	description: string | React.ReactNode;
	stack: string[];
	repoLink: string;
	externalLink: string;
}

const SkillCard = ({ name, description, stack, externalLink, repoLink }: CardProps) => {
	return (
		<div className="col-4">
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
};

export default SkillCard;
