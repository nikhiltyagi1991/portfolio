import portfolio from '../portfolio.json';
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '../icons';

const Footer = () => {
    return (
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
    )
}

export default Footer