import './App.css';
import portfolio from './portfolio.json';
import React from 'react';
import { EmailIcon, GithubIcon, LinkedInIcon } from './icons';
import "leaflet/dist/leaflet.css";
import Experience from './components/Experience';
import Projects from './components/Projects';
import Header from './components/Header';
import Hobbies from './components/Hobbies';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {

  const commaSplitDesignation = portfolio.designation.split(',');

  return (
    <div className='bg-white text-black dark:text-white dark:bg-black'>
      {/* Header Section */}
      <Header />


      {/* First Page */}
      <div className="container">
        <div className='flex items-center flex-col md:flex-row'>
          <div className='flex-1'>
            <div className='text-7xl'>
              <div>{portfolio.first_name}</div>
              <div>{portfolio.last_name}.</div>
            </div>
            <div className='mt-8 bg-black h-2 w-16 rounded-2xl dark:bg-white'></div>
            <div className='flex gap-4 mt-8'>
              <a href={portfolio.linkedin} className='hover:text-gray-400'> <LinkedInIcon className='w-10 h-10' /> </a>
              <a href={portfolio.github} className='hover:text-gray-400'> <GithubIcon className='w-10 h-10' /> </a>
              <a href={`mailto:${portfolio.email}`} className='hover:text-gray-400'> <EmailIcon className='w-10 h-10' /> </a>
            </div>
          </div>
          <div className='flex-[2_1_0%] self-end'>
            <img src={portfolio.own_pic} alt={portfolio.first_name} />
          </div>
          <div className='flex-1 mb-32'>
            <div className='text-3xl mt-4 md:mt-auto'>
              {commaSplitDesignation.map((x, i) => <div key={x}>{x}{commaSplitDesignation.length === i + 1 ? '' : ','}</div>)}
            </div>
            <div className='mt-8 text-sm' dangerouslySetInnerHTML={{ __html: portfolio.intro }}></div>
          </div>
        </div>
      </div>

      {/* Recent Companies Section */}
      <div className="container">
        <div className='flex flex-col md:flex-row items-center bg-gray-400 dark:bg-gray-600 w-3/4 p-8 m-auto -mt-4 rounded-sm relative gap-1'>
          <div className='md:text-xl'>
            Meet My Recent Companies
          </div>
          <div className='flex-1'></div>
          <div className='flex gap-2 md:gap-4 lg:gap-8 items-center'>
            {
              portfolio.workexperience.map(x => <a key={x.organization} href={x.link}>
                <img className='rounded-xl' width={64} height={64} src={x.icon} alt={x.organization} title={x.organization} />
              </a>
              )
            }
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className='bg-gray-100 dark:bg-gray-800 -mt-16'>
        <Skills />
      </div>

      <div><Experience /></div>

      <div><Projects /></div>

      <div><Hobbies /></div>

      {/* Footer */}
      <div><Footer /></div>
    </div>
  );
}

export default App;
