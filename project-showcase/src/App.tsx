import Header from './Header';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';

// TODO: replace this with a fetch request (eventually)
import projects from './data/projects.js';

function App() {
  return (
    <>
      <div className='App'>
        <Header />
        <ProjectForm />
        <ProjectList projects={projects} />
      </div>
    </>
  );
}

export default App;
