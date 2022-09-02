// @EXTERNALS
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faCodeBranch, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';
// @COMPONENTS
// @MISC

interface CardProps {
  name: string;
  description: string | React.ReactNode;
  stack: string[];
  repoLink: string;
  externalLink: string;
}

const SkillHeader = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const SkillCard = ({ name, description, stack, externalLink, repoLink }: CardProps) => {
  return (
    <div className="col-3 mt-2 mb-2">
      <div className="skill-card shadow-sm">
        <SkillHeader>
          <b>{name}</b>
          <div style={{ position: 'absolute', right: 0 }}>
            {externalLink && (
              <a href={externalLink} target="_blank">
                <FontAwesomeIcon
                  className="fa-icon clickable-icon p-2"
                  fontSize={25}
                  icon={faArrowUpRightFromSquare}
                  style={{ cursor: 'pointer' }}
                  color="#677f91"
                />
              </a>
            )}
            {repoLink && (
              <a href={repoLink} target="_blank">
                <FontAwesomeIcon
                  className="fa-icon clickable-icon p-2"
                  fontSize={25}
                  icon={faCodeBranch}
                  style={{ cursor: 'pointer' }}
                  color="#677f91"
                />
              </a>
            )}
          </div>
        </SkillHeader>

        <p className="mb-5">{description}</p>
        <div className="d-flex justify-content-between align-items-center badge-group">
          <div>
            {stack.map((item) => {
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
