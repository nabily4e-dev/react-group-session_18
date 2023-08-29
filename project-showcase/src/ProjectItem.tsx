import { Project } from './data/projects';

type ProjectItemProps = {
  project: Project;
  key: number;
};

function ProjectItem(props: ProjectItemProps) {
  return (
    <li className='card'>
      <div className='image'>
        <img
          src={props.project.image}
          alt={props.project.name}
        />
        <button className='claps'>👏{0}</button>
      </div>

      <div className='details'>
        <h4>{props.project.name}</h4>
        <p>{props.project.about}</p>
        {props.project.link ? (
          <p>
            <a href={props.project.link}>Link</a>
          </p>
        ) : null}
      </div>

      <div className='extra'>
        <span className='badge blue'>Phase {props.project.phase}</span>
      </div>
    </li>
  );
}

export default ProjectItem;
