import Image from 'next/image';
import React, { FunctionComponent } from 'react';
import { colorTable, Tcolors } from '../../lib/colorTable';
import { Project } from '../../types/project.type';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ project }) => {
  const {
    coverUrl,
    properties: { name: title, description, tag: tags, github: githubLink, npm: npmLink, blog: blogLink },
  } = project;
  const displayedDescription = description.length > 58 ? description.slice(0, 58).concat('...') : description;

  return (
    <div className='xl:w-1/4 md:w-1/2 w-full p-4'>
      <div className='project-card'>
        <div className='project-card__image-container'>
          {coverUrl === null ? (
            <h1 className='font-medium'>No Image</h1>
          ) : (
            <Image src={coverUrl} alt='cover image' layout='fill' objectFit='cover' objectPosition='center' quality={100} />
          )}
        </div>
        <div className='project-card__content-container'>
          <h2 className='text-lg text-indigo-500 dark:text-orange-400 font-medium mb-3'>{title}</h2>
          <p className='leading-relaxed text-base break-words'>{displayedDescription}</p>
          <div className='flex items-start flex-wrap mt-2'>
            {tags.map((aTag) => (
              <span className={'px-2 py-1 mb-2 mr-2 text-black text-xs rounded-md'} style={{ backgroundColor: colorTable[aTag.color as Tcolors] }} key={aTag.id}>
                {aTag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;