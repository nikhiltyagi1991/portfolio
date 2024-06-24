import React from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import portfolio from '../portfolio.json';

const SkillsModal = (params) => {
    const { modalOpen, handleClose } = params;

    const otherSkills = () => {
        const sklList = portfolio.skills.otherSkills.skillCategories;
        const skillElements = [];
        for (const [key, val] of Object.entries(sklList)) {
            skillElements.push(
                <div key={key}>
                    <div className='text-lg font-bold'>{key}</div>
                    <div className='text-sm'>{val.split(', ').map((x) => <div key={key + x}>• {x}</div>)}</div>
                </div>
            )
        }
        return skillElements;
    };

    return (
        <Transition show={modalOpen}>
            <Dialog className="relative z-10" onClose={handleClose}>
                <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <TransitionChild
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl">
                                <div className='p-8 z-20'>
                                    <div className='text-center text-3xl' dangerouslySetInnerHTML={{ __html: portfolio.skills.otherSkills.heading }}></div>
                                    <div className='text-center my-8' dangerouslySetInnerHTML={{ __html: portfolio.skills.otherSkills.subheading }}></div>
                                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                                        {otherSkills()}
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
};

export default SkillsModal;