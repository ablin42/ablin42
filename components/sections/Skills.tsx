// @EXTERNALS
import React, { useState } from 'react';
import SkillCard from '../SkillCard';
// @COMPONENTS
import { TAGS, PROJECTS } from '../../SKILLS-OBJECTS';
// @MISC

const SKILLS_LIST = TAGS.map((tag) => tag.name);

const Skills = () => {
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState<Array<string>>(SKILLS_LIST);
  const [tags, setTags] = useState<Array<any>>([]);
  const [matchingProjects, setMatchingProjects] = useState(PROJECTS);

  const removeTag = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    getMatchingProjects(newTags);
    setTags(newTags);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // ? Change Events dont have a keycode property, so we check like this instead
    if (value[value.length - 1] === ',') return;
    setSearch(value);

    const suggest = SKILLS_LIST.filter((skill) => skill.toLowerCase().indexOf(value) > -1);
    setSuggestions(suggest);
  };

  const addTag = (tagName: string) => {
    if (tags.find((tag) => tag.name == tagName)) return;

    let tag = TAGS.find((tag) => tag.name == tagName);
    if (!tag) {
      const suggest = SKILLS_LIST.filter((skill) => skill.indexOf(tagName) > -1);
      if (suggest.length <= 0) return;
      tag = TAGS.find((tag) => tag.name === suggest[0]);
    }
    const newTags = [...tags];
    newTags.push(tag);
    getMatchingProjects(newTags);
    setTags(newTags);
    setSearch('');
    setSuggestions(SKILLS_LIST);
  };

  const getMatchingProjects = (tags: Array<any>) => {
    const projectsObj = PROJECTS.map((project) => {
      return {
        name: project.name,
        stack: project.stack.map((tag) => tag.toLowerCase()),
        description: project.description,
        github: project.github,
        link: project.link,
        nbMatch: 0,
      };
    });

    const tagStack = tags.map((tag) => tag.name);

    tagStack.forEach((tag) => {
      projectsObj.forEach((project, index) => {
        if (project.stack.includes(tag.toLowerCase())) projectsObj[index].nbMatch += 1;
      });
    });

    const match = projectsObj.filter((project) => project.nbMatch > 0).sort((a, b) => b.nbMatch - a.nbMatch);
    setMatchingProjects(match);
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13 || e.keyCode === 9 || e.keyCode === 188) addTag(suggestions[0]);
    if (e.keyCode === 188) setSearch('');
  };

  return (
    <>
      <section className="section main-section fp-auto-height-responsive" id="skills-section" data-anchor="skills">
        <h1 style={{ textAlign: 'center', color: 'white', marginTop: '30px', marginBottom: '-30px' }}>
          Projects & Skills
        </h1>
        <div className="container-fluid mb-5">
          <div className="col-xl-8 col-lg-10 m-auto mt-5">
            <div className="form-control shadow-sm">
              <input
                type="text"
                className="form-control shadow-sm"
                placeholder="Search for a skill (React, Node, Javascript...)"
                value={search}
                onChange={(e) => handleSearch(e)}
                onKeyDown={(e) => handleKey(e)}
              />
              <div className="mt-2">
                {suggestions.length > 0 && <span style={{ color: 'white' }}>Suggestions</span>}
                {suggestions.map((tag, index) => (
                  <span
                    key={tag}
                    className="badge badge-secondary m-1"
                    style={{ cursor: 'pointer' }}
                    onClick={() => addTag(tag)}
                  >
                    {tag}
                  </span>
                ))}
                <br />
                {tags.map((tag, index) => (
                  <span key={tag.name} className="badge badge-primary m-1">
                    {tag.name}
                    <b
                      className="ms-2 text-white"
                      style={{ color: 'white !important', cursor: 'pointer' }}
                      onClick={() => removeTag(index)}
                    >
                      x
                    </b>
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-3">
              <div className="row">
                {matchingProjects.map((project) => {
                  const { name, stack, description, github, link } = project;
                  return (
                    <SkillCard
                      key={name}
                      name={name}
                      description={description}
                      stack={stack}
                      externalLink={link}
                      repoLink={github}
                      tags={tags}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
