import React from 'react';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import portfolio from '../../portfolio.json';
import EmblaCarousel from '../embla-carousel/EmblaCarousel';

function MapComponent(props) {
  const map = useMap();
  React.useEffect(() => {
    map.setView(props.center, props.zoom);
  }, [props.center, props.zoom, map])
  return null
}

const Experience = () => {
    const OPTIONS = { loop: true };
    const [mapPosition, setMapPosition] = React.useState(portfolio.workexperience[0].latlong);
    const [selectedExperience, setSelectedExperience] = React.useState(portfolio.workexperience[0]);
    const handleSlideChange = React.useCallback((selectedIndex) => {
        let center = portfolio.workexperience[selectedIndex].latlong;
        setSelectedExperience(portfolio.workexperience[selectedIndex]);
        setMapPosition(center);
      }, []);

    const SLIDES = portfolio.workexperience.map(exp => ({key: exp.organization, slide: (
    <div key={exp.organization} className='p-4'>
        <div className='text-3xl'>{exp.Designation}</div>
        <a className='flex gap-4 my-4 cursor-pointer' href={exp.link} >
            <img className='w-8 h-8' src={exp.icon} alt={exp.organization} />
            <div className='text-2xl'>{exp.organization}</div>
        </a>
        <div>{exp.location}</div>
        <div>{exp.Duration}</div>
        <div className='mt-4' dangerouslySetInnerHTML={{'__html': exp.Responsibilities}}></div>
    </div>)})
    );
    return (
        <div className='container'>
            <div className='py-8'>
            <div className='text-5xl text-center'>Professional Experience</div>
            <div className='text-center my-4 text-lg'>{portfolio.experienceSummary}</div>
            <div className='mt-4 flex'>
                <MapContainer className='h-[50vh] w-2/3 flex-1' center={mapPosition} zoom={13}>
                <MapComponent center={mapPosition} zoom={10}  />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={mapPosition} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
                    <Popup>
                    {selectedExperience.organization} <br /> {selectedExperience.location}
                    </Popup>
                </Marker>
                </MapContainer>
                <div className='p-4'>
                <EmblaCarousel slidesInView={handleSlideChange} slides={SLIDES} options={OPTIONS} />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Experience