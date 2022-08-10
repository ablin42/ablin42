// @EXTERNALS
import React, { useState } from "react";
import styled, { StyledComponent } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCodeBranch, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
// @COMPONENTS
// @MISC

const Menu: StyledComponent<any, any> = styled.div`
	position: absolute;
	right: ${({ attachRight }: any) => (attachRight ? "-30px" : "auto")};
	left: ${({ attachRight }: any) => (attachRight ? "auto" : "-30px")};
	padding: 5px;
	background-color: #33a1fd;
	border-radius: 15px;
`;

interface MenuProps {
	repoLink: string;
	externalLink: string;
	attachRight?: boolean;
}

const ProjectMenu = ({ repoLink, externalLink, attachRight }: MenuProps) => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<Menu className="d-flex flex-column shadow-sm" attachRight={attachRight}>
			<FontAwesomeIcon
				className="fa-icon clickable-icon p-2"
				fontSize={25}
				icon={faLayerGroup}
				color="#121212"
				onClick={() => setOpen(!open)}
			/>
			{open && (
				<>
					<a href={externalLink} target="_blank">
						<FontAwesomeIcon
							className="fa-icon clickable-icon p-2"
							fontSize={25}
							icon={faArrowUpRightFromSquare}
							style={{ cursor: "pointer" }}
							color="#121212"
						/>
					</a>
					<a href={repoLink} target="_blank">
						<FontAwesomeIcon
							className="fa-icon clickable-icon p-2"
							fontSize={25}
							icon={faCodeBranch}
							style={{ cursor: "pointer" }}
							color="#121212"
						/>
					</a>
				</>
			)}
		</Menu>
	);
};

export default ProjectMenu;
