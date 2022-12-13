// @EXTERNALS
import React, { useState } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCodeBranch, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
// @COMPONENTS
// @MISC

const Menu: StyledComponent<any, any> = styled.div`
  right: ${({ attachRight }: any) => (attachRight ? '-30px' : 'auto')};
  left: ${({ attachRight }: any) => (attachRight ? 'auto' : '-30px')};
`;

interface MenuProps {
  repoLink: string;
  externalLink: string;
  attachRight?: boolean;
}

const ProjectMenu = ({ repoLink, externalLink, attachRight }: MenuProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Menu className="d-flex flex-column shadow-sm project-menu" attachRight={attachRight}>
      <FontAwesomeIcon
        className="fa-icon clickable-icon p-2"
        fontSize={25}
        icon={faLayerGroup}
        color="#1a1a1a"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <>
          {externalLink && (
            <a href={externalLink} target="_blank">
              <FontAwesomeIcon
                className="fa-icon clickable-icon p-2"
                fontSize={25}
                icon={faArrowUpRightFromSquare}
                style={{ cursor: 'pointer' }}
                color="#1a1a1a"
              />
            </a>
          )}
          <a href={repoLink} target="_blank">
            <FontAwesomeIcon
              className="fa-icon clickable-icon p-2"
              fontSize={25}
              icon={faCodeBranch}
              style={{ cursor: 'pointer' }}
              color="#1a1a1a"
            />
          </a>
        </>
      )}
    </Menu>
  );
};

export default ProjectMenu;
