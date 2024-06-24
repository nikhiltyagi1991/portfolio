import React from 'react'
import EmblaCarousel from './embla-carousel/EmblaCarousel';
import portfolio from '../portfolio.json';

const Projects = () => {
    const OPTIONS = { loop: true };
    const [selectedProject, setSelectedProject] = React.useState(portfolio.projects[0]);
    const SLIDES = portfolio.projects.map(project => ({
        key: project.title, slide: (
            <div key={project.title} className='p-4'>
                <img className='w-full' src={project.image} alt={project.title} />
                <a className='flex gap-4 my-4 cursor-pointer' href={project.demo} >
                    <div className='text-3xl'>{project.title}</div>
                </a>
                <div className='mt-4' dangerouslySetInnerHTML={{ '__html': project.about }}></div>
            </div>)
    })
    );
    const handleSlideChange = (selectedIndex) => {
        setSelectedProject(portfolio.projects[selectedIndex]);
    }

    return (
        <div className='bg-gray-100 dark:bg-gray-800'>
            <div className='container'>
                <div className='py-8'>
                    <div className='text-5xl text-center'>Projects</div>
                    <div className='text-center my-4 text-lg lg:w-3/4 lg:mx-auto'>{portfolio.projectsSummary}</div>
                    <div className='flex flex-col md:flex-row my-8'>
                        <div className='flex-1'>
                            <EmblaCarousel slides={SLIDES} options={OPTIONS} slideChangeHandler={handleSlideChange} />
                        </div>
                        <div className='flex-1'>
                            <iframe
                                className='w-full h-full pt-8 md:p-8 rounded-md'
                                src={selectedProject.youtube}
                                title={selectedProject.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;