import React from 'react';
import portfolio from '../portfolio.json';
import SkillsModal from './SkillsModal';

const Skills = () => {
    const [open, setOpen] = React.useState(false);

    const handleSkillsModal = () => {
        console.log('skills here');
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    return (
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
                            <div className='w-full h-2 bg-black rounded-lg'>
                                <div style={{ width: `${x.expertise}%` }} className='bg-slate-400 h-2 rounded-lg'></div>
                            </div>
                            <div className='text-slate-400'>{x.expertise}%</div>
                        </div>)}
                        <button onClick={handleSkillsModal} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 w-1/2 self-center rounded mt-8">
                            More...
                        </button>
                    </div>
                </div>
            </div>
            <SkillsModal modalOpen={open} handleClose={handleClose} />
        </div>
    )
}

export default Skills