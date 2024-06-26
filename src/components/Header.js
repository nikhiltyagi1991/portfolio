import React from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import portfolio from '../portfolio.json';

const Header = () => {
    const [isDarkTheme, setIsDarkTheme] = React.useState(window.matchMedia("(prefers-color-scheme: dark)").matches);

    const handleChangeInMode = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        setIsDarkTheme(event.matches);
    });

    React.useEffect(() => {
        const htmlElement = document.getElementsByTagName('html').item(0);
        htmlElement.classList[isDarkTheme ? 'add' : 'remove']('dark');
    }, [isDarkTheme]);
    return (
        <div className='py-8'>
            <div className="container flex">
                <div className='text-3xl'>{portfolio.initials}.</div>
                <div className='flex-1'></div>
                <div className='cursor-pointer flex gap-2 self-center' onClick={() => handleChangeInMode()}>
                    {isDarkTheme ? <>
                        <span>Let There be Light!</span>
                        <SunIcon className="size-6" /></>
                        : <>
                            <span>It's too bright!</span>
                            <MoonIcon className="size-6" />
                        </>}
                </div>
            </div>
        </div>
    )
}

export default Header