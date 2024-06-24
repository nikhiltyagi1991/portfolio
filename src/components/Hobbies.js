import React from 'react';
import portfolio from '../portfolio.json';
import { Spinner } from '../icons';

const Hobbies = () => {
    const [selectedArt, setSelectedArt] = React.useState(portfolio.artwork[0]);
    const [loadingArray, setLoadingArray] = React.useState(portfolio.artwork.map(x => true));

    const handleOnLoad = (idx) => {
        console.log('image loaded');
        setLoadingArray(Object.assign([], [...loadingArray], { idx: false }));
    }
    return (
        <div>
            <div className='container'>
                <div className='py-8'>
                    <div className='text-5xl text-center mb-8'>Hobbies & Artwork</div>
                    <div className="grid gap-4">
                        <div>
                            <img
                                loading="lazy"
                                className="h-[50vh] m-auto max-w-full rounded-lg"
                                src={selectedArt}
                                alt={portfolio.artwork} />
                        </div>
                        <div className="flex gap-4 overflow-auto cursor-pointer rounded-sm min-w-fit">
                            {
                                portfolio.artwork.map((x, idx) => (<div className="w-fit">
                                    <Spinner key={x} style={{ display: loadingArray[idx] ? 'block' : 'none' }} />
                                    <img
                                        onClick={() => setSelectedArt(x)}
                                        key={x}
                                        loading="lazy"
                                        className={`h-32 ${x === selectedArt && 'border-gray-500 border-8'}`}
                                        alt={x}
                                        src={x}
                                        onLoad={() => { console.log('on load called'); handleOnLoad(idx); }}
                                    />
                                </div>))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Hobbies;