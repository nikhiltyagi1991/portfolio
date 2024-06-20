import './App.css';
import portfolio from './portfolio.json';
import React from 'react';
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './icons';
import "leaflet/dist/leaflet.css";
import Experience from './components/Experience';
import Projects from './components/Projects';
import Header from './components/Header';

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
      <div className='bg-gray-200 dark:bg-gray-800 -mt-16'>
        <div className="container">
          <div className='flex flex-col items-center pt-16 md:p-16'>
            <div className='text-5xl mt-16'>{portfolio.skills.heading}</div>
            <div className='text-lg mt-8 lg:w-1/2 text-center' dangerouslySetInnerHTML={{ __html: portfolio.skills.summary }}></div>
            <div className='flex flex-col md:flex-row'>
              <div className='flex-1 mt-8 flex flex-col gap-4'>
                <div className='text-2xl'>{portfolio.skills.leftSection.heading}</div>
                <div>{portfolio.skills.leftSection.summary}</div>
                <div className='flex flex-wrap'>
                  {portfolio.skills.leftSection.components.map(x => (
                    <div key={x.subtext} className='flex-[0_1_40%] bg-gray-400 m-1 p-4 lg:m-2 lg:p-7 rounded-sm'>
                      <div className='text-5xl'>{x.text}</div>
                      <div>{x.subtext}</div>
                    </div>)
                  )}
                </div>
              </div>
              <div className='flex-1 flex flex-col gap-4 self-center w-full py-8 md:p-auto'>
                {portfolio.skills.rightSection.keySkills.map(x => <div key={x.name} title={`${x.expertise}%`} className='flex items-center gap-4'>
                  <div className='text-xl w-1/2 md:pl-8'>{x.name}</div>
                  <div className='w-full h-2 flex rounded-lg'>
                    <div style={{ width: `${x.expertise}%` }} className='bg-black h-2 rounded-lg relative z-10'></div>
                    <div style={{ width: `${100 - x.expertise}%` }} className='bg-white h-2 rounded-lg'></div>
                  </div>
                </div>)}
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 w-1/2 self-center rounded mt-8">
                  More...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Experience />
      </div>

      <div>
        <Projects />
      </div>

      <div>
        <div className='container'>
          <div className='py-8'>
            <div className='text-5xl text-center'>Hobbies & Artwork</div>
          </div>
        </div>
      </div>



      {/* Footer */}
      <div className='bg-gray-300 dark:bg-inherit'>
        <div className='container py-4'>
          <div className='flex'>
            <div>
              <div className='text-3xl'>{portfolio.first_name}.</div>
            </div>
            <div className='flex-1'></div>
            <div>
              <div>Follow Me</div>
              <div className='flex gap-4 mt-4 cursor-pointer'>
                <a href={portfolio.linkedin} className='hover:text-gray-400'> <LinkedInIcon /> </a>
                <a href={portfolio.github} className='hover:text-gray-400'> <GithubIcon /> </a>
                <a href={portfolio.instagram} className='hover:text-gray-400'> <InstagramIcon /> </a>
                <a href={portfolio.facebook} className='hover:text-gray-400'> <FacebookIcon /> </a>
                <a href={portfolio.twitter} className='hover:text-gray-400'> <TwitterIcon /> </a>
              </div>
            </div>
          </div>
          <div className='h-px w-full my-4 dark:bg-white'></div>
          <div className='text-lg'> {portfolio.copyright} </div>
        </div>
      </div>
    </div>
  );
}

export default App;
