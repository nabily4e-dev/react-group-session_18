import ProjectItem from './ProjectItem';
import { Project } from './data/projects';

type ProjectListProps = {
  projects: Project[];
};

function ProjectList(props: ProjectListProps) {
  // map over the array of project objects => return an array of ProjectItem components
  // [{},{},{},{}] => [<ProjectItem />, <ProjectItem />, <ProjectItem />, <ProjectItem />]
  const projectItems = props.projects.map((project) => {
    return (
      <ProjectItem
        key={project.id}
        project={project}
      />
    );
  });

  return (
    <section>
      <h2>Projects</h2>

      <div className='filter'>
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input
        type='text'
        placeholder='Search...'
      />

      <ul className='cards'>{projectItems}</ul>
    </section>
  );
}

export default ProjectList;
