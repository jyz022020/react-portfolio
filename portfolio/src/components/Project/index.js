import { capitalizeFirstLetter } from '../../utils/helpers';
function Project(props) {
    const {
      project
    } = props;
  
    return (
        <div>
            <span>{project.name}  </span>
            <a href={project.github}>Explore the Application</a>
            <a href={project.url}>
                <img
                    src={require(`../../assets/projects/${project.name}.png`)}
                    alt={project.name}
                    key={project.name}
                />
            </a>
        </div>
    );
  }
  
  export default Project;
  