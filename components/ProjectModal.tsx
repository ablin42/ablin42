// @EXTERNALS
import React, { useState } from "react";
import styled, { StyledComponent } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCodeBranch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
// @COMPONENTS
// @MISC

interface ModalProps {
	repoLink: string;
	externalLink: string;
	attachRight?: boolean;
}

const FloatWrapper = styled.div<{ top: string; right: string }>`
	position: absolute;
	z-index: 1;
	right: ${({ right }) => right};
	top: ${({ top }) => top};
`;

const ProjectModal = ({ repoLink, externalLink, attachRight }: ModalProps) => {
	const [open, setOpen] = useState<boolean>(false);

	// TODO display content passed as props
	return (
		<>
			{open !== null ? (
				<div className="overlay" onClick={() => setOpen(false)}>
					<div className="shadow-lg prepare-modal" onClick={e => e.stopPropagation()}>
						<FloatWrapper top="5px" right="15px">
							<FontAwesomeIcon
								icon={faXmark}
								fontSize={30}
								color="#ff5959"
								className="mr-3"
								onClick={() => setOpen(false)}
								style={{ cursor: "pointer" }}
							/>
						</FloatWrapper>
					</div>
				</div>
			) : null}
		</>
	);
};

export default ProjectModal;
