import React from 'react';
import portfolio from '../portfolio.json';
import { Spinner } from '../icons';
import ImageLoader from './ImageLoader';

const Hobbies = () => {
    const [selectedArt, setSelectedArt] = React.useState(portfolio.artwork[0]);
    return (
        <div>
            <div className='container'>
                <div className='py-8'>
                    <div className='text-5xl text-center mb-8'>Hobbies & Artwork</div>
                    <div className="grid gap-4">
                        <div className='w-full flex items-center'>
                            <div className='m-auto max-w-full rounded-lg'>
                                <ImageLoader
                                    imgHeight='h-[50vh]'
                                    src={selectedArt}
                                    alt={selectedArt}
                                    onClick={null}
                                    isSelected={false}
                                />
                            </div>
                        </div>
                        <div className="flex gap-4 overflow-auto cursor-pointer rounded-sm min-w-fit">
                            {
                                portfolio.artwork.map((x) => (
                                    <ImageLoader
                                        imgHeight='h-32'
                                        key={x}
                                        onClick={() => setSelectedArt(x)}
                                        isSelected={selectedArt === x}
                                        src={x}
                                    />))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Hobbies;



{/* <div className="w-fit" key={x}>
                                    <Spinner style={{ display: loadingArray[idx] ? 'block' : 'none' }} />
                                    <img
                                        onClick={() => setSelectedArt(x)}
                                        loading="lazy"
                                        className={`h-32 ${x === selectedArt && 'border-gray-500 border-8'}`}
                                        alt={x}
                                        src={x}
                                        onLoad={() => { console.log('on load called'); handleOnLoad(idx); }}
                                    />
                                </div> */}