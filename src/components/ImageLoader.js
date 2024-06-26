import React from 'react'
import { Spinner } from '../icons';

const ImageLoader = (params) => {
    const [loading, setLoading] = React.useState(true);
    const handleOnLoad = () => {
        setLoading(false);
    }
    return (
        <div className='items-center contents' onClick={params.onClick}>
            {loading && <div className={`${params.imgHeight} flex items-center`}><Spinner /></div>}
            <img
                style={{ visibility: loading ? 'hidden' : 'visible' }}
                loading="lazy"
                className={`${params.imgHeight} ${params.isSelected ? 'border-4 border-gray-500' : ''}`}
                alt={params.src}
                src={params.src}
                onLoad={handleOnLoad}
            />
        </div>
    )
}

export default ImageLoader;