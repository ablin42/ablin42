// @EXTERNALS
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCodeBranch, faStar } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
// @COMPONENTS
// @MISC
import { TAGS } from '../SKILLS-OBJECTS';

interface CardProps {
  name: string;
  description: string | React.ReactNode;
  stack: string[];
  repoLink: string;
  externalLink: string;
  tags: Array<any>;
}

const SkillHeader = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const SkillCard = ({ name, description, stack, externalLink, repoLink, tags }: CardProps) => {
  const tagStack = tags.map((tag: any) => tag.name);

  return (
    <div className="col-md-3 mt-2 mb-2">
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
            {stack
              .map((item) => {
                return (
                  <span key={item} className={`badge bg-${tagStack.includes(item) ? 'info' : 'primary'} m-1`}>
                    {TAGS[TAGS.findIndex((tag) => tag.name == item)]?.isFavorite && (
                      <FontAwesomeIcon
                        className="fa-icon me-1"
                        fontSize={15}
                        icon={faStar}
                        style={{ cursor: 'pointer' }}
                        color="white"
                      />
                    )}
                    {item}
                  </span>
                );
              })
              .sort((a, b) => {
                return TAGS[TAGS.findIndex((tag) => tag.name == a.key)]?.isFavorite &&
                  !TAGS[TAGS.findIndex((tag) => tag.name == b.key)]?.isFavorite
                  ? -1
                  : 1;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
