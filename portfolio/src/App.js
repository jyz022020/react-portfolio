import React, { useState } from 'react';
import About from './components/About';
import ContactForm from './components/Contact';
import Head from './components/Head';
import Footer from './components/Footer';
import Project from './components/Project';
import Resume from './components/Resume';


function App() {
  const [categories] = useState([
    {
      name: 'About me',
      description: 'All the projects in the past',
    },
    { name: 'Portfolio', description: 'Portraits of people in my life' },
    {
      name: 'Contact',
      description: 'All the projects in the past',
    },
    {
      name: 'Resume',
      description: 'All the projects in the past',
    }
  ]);

  const [projects] = useState([
    {
      name: 'Night-Out-Planner',
      url: 'https://jyz022020.github.io/Project1-Night-Out-Planner/',
      github: 'https://github.com/jyz022020/Project1-Night-Out-Planner',
    },
    { name: 'Astrozod', 
      url: 'https://astrozod.herokuapp.com/',
      github: 'https://github.com/jyz022020/Astrozod',

    },
    {
      name: 'Money-Tracker',
      url: 'https://money-tracker-2022.herokuapp.com/',
      github: 'https://github.com/jyz022020/money-tracker',
    },
    {
      name: 'Weather-Dashboard',
      url: 'https://jyz022020.github.io/module6/',
      github: 'https://github.com/jyz022020/module6',
    },
    {
      name: 'Note-Taker',
      url: 'https://jyz-note-taker.herokuapp.com/',
      github: 'https://github.com/jyz022020/project11'
    },
    {
      name: 'Work-Day-Scheduler',
      url: 'https://jyz022020.github.io/module5/',
      github: 'https://github.com/jyz022020/module5'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Head
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Head>
      <main>
        {currentCategory.name === "About me" ? (
          <>
            <About></About>
          </>
        ) : null}
        {currentCategory.name === "Portfolio" ? (
          projects.map((project) => (
            <li
              key={project.name}
            >
              <Project
                project={project}
              ></Project>
            </li>
          ))
        ) : null}
        {currentCategory.name === "Contact" ? (
          <>
            <ContactForm></ContactForm>
          </>
        ) : null}
        {currentCategory.name === "Resume" ? (
          <>
            <Resume></Resume>
          </>
        ) : null}
      </main>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
