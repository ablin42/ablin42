// @EXTERNALS
import React, { useState } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Trans } from 'react-i18next';
// @COMPONENTS
import ProjectMenu from '../ProjectMenu';
import ProjectModal from '../ProjectModal';
// @MISC

const ProjectItem: StyledComponent<any, any> = styled.div`
  padding: ${({ attachRight }: any) => (!attachRight ? '20px 30px 20px 40px' : '20px 40px 20px 35px')};
`;

const LinkText = (props: any) => {
  return (
    <a href={props.to || '#'} target="_blank" title={props.title || ''}>
      {props.children}
    </a>
  );
};

const Portfolio = () => {
  const [open, setOpen] = useState<null | number>(null);

  return (
    <>
      <section
        className="section main-section even fp-auto-height-responsive"
        id="portfolio-section"
        data-anchor="portfolio"
      >
        <>
          {open && <ProjectModal setOpen={setOpen} />}

          <div className="bg-clipper">
            <div className="container-fluid ">
              <h1 className="section-header text-center" style={{ margin: '50px auto -30px auto' }}>
                Highlighted Projects
              </h1>

              <div className="col-xl-8 col-lg-10 m-auto mt-5 pt-4 pb-5 portfolio-container">
                {/* <div className="tk-blob centered-blob" style={{ fill: "#2e7bbb" }}>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 274 303.2">
									<path d="M260.2 41.4c20 29.2 14.6 74.5 7.2 124.4-7.3 49.9-16.6 104.5-49.2 126-32.5 21.6-88.4 10.2-132-15.2s-75-64.7-83.6-107.8C-6.1 125.7 8 79 36.3 47.8 64.5 16.7 107 1.3 150.9.1c43.9-1.1 89.3 12 109.3 41.3z"></path>
								</svg>
							</div> */}
                <div className="col-md-8 col-11 m-auto mt-3">
                  <div className="row">
                    <div className="col-md-6 p-2">
                      <ProjectItem className="project-item" style={{ borderRadius: '10px 10px 30px 10px' }}>
                        <ProjectMenu
                          externalLink="https://dungeondefenders.xyz/"
                          repoLink="https://github.com/ablin42/dungeon-defenders"
                        />
                        <div className="d-flex align-items-center mb-1">
                          <h1>Dungeon Defenders</h1>
                        </div>
                        <p className="mb-5">
                          <Trans>DungeonDefendersDescription</Trans>
                        </p>
                        {/* <span onClick={() => setOpen(1)}>MODAL</span> */}

                        <div className="d-flex justify-content-between align-items-center badge-group">
                          <div>
                            <span className="badge badge-secondary m-1">Typescript</span>
                            <span className="badge badge-secondary m-1">ReactJS</span>
                            <span className="badge badge-secondary m-1">NodeJS</span>
                            <span className="badge badge-secondary m-1">Solidity</span>
                            <span className="badge badge-secondary m-1">NFT</span>
                          </div>
                        </div>
                      </ProjectItem>
                    </div>
                    <div className="col-md-6 p-2">
                      <ProjectItem className="project-item" style={{ borderRadius: '10px 10px 10px 30px' }}>
                        <ProjectMenu
                          externalLink="https://www.bullvsbear.pro/"
                          repoLink="https://github.com/ablin42/bullvsbear"
                          attachRight
                        />
                        <div className="d-flex align-items-center mb-1">
                          <h1>BullvsBear</h1>
                        </div>
                        <p className="mb-5">
                          <Trans
                            components={{
                              pcsLink: (
                                <LinkText
                                  to={'https://pancakeswap.finance/prediction'}
                                  title="Pancakeswap Predictions"
                                />
                              ),
                            }}
                          >
                            BullvsBearDescription
                          </Trans>
                        </p>

                        <div className="d-flex justify-content-between align-items-center badge-group">
                          <div>
                            <span className="badge badge-secondary m-1">NextJS</span>
                            <span className="badge badge-secondary m-1">NodeJS</span>
                            <span className="badge badge-secondary m-1">MongoDB</span>
                          </div>
                        </div>
                      </ProjectItem>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 p-2">
                      <ProjectItem className="project-item" style={{ borderRadius: '10px 30px 10px 10px' }}>
                        <ProjectMenu
                          externalLink="https://chaproulette.lol/"
                          repoLink="https://github.com/ablin42/chaproulette"
                        />
                        <div className="d-flex align-items-center mb-1">
                          <h1>Chaproulette</h1>
                        </div>
                        <p className="mb-5">
                          <Trans>ChaprouletteDescription</Trans>
                        </p>

                        <div className="d-flex justify-content-between align-items-center badge-group">
                          <div>
                            <span className="badge badge-secondary m-1">NextJS</span>
                            <span className="badge badge-secondary m-1">Typescript</span>
                          </div>
                        </div>
                      </ProjectItem>
                    </div>

                    <div className="col-md-6 p-2">
                      <ProjectItem className="project-item" style={{ borderRadius: '30px 10px 10px 10px' }}>
                        <ProjectMenu externalLink="" repoLink="https://github.com/ablin42/url-shortener" attachRight />
                        <div className="d-flex align-items-center mb-1">
                          <h1>Xs-url</h1>
                        </div>
                        <p className="mb-5">
                          <Trans>XsUrlDescription</Trans>
                        </p>

                        <div className="d-flex justify-content-between align-items-center badge-group">
                          <div>
                            <span className="badge badge-secondary m-1">Typescript</span>
                            <span className="badge badge-secondary m-1">ReactJS</span>
                            <span className="badge badge-secondary m-1">NodeJS</span>
                          </div>
                        </div>
                      </ProjectItem>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </section>
    </>
  );
};

export default Portfolio;
