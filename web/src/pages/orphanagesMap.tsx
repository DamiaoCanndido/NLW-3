import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi'; 
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarker from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';
import MapIcon from '../utils/mapIcon';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Patos</strong>
                    <span>Paraíba</span>
                </footer>
            </aside>

            <Map 
                center={[-7.0261863,-37.2651076]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {/*<TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>*/}
                <Marker 
                    icon={MapIcon}
                    position={[-7.0261863,-37.2651076]}
                >

                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Lar das primas
                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color="#fff"/>
                        </Link>
                    </Popup>
                    
                </Marker>
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    )
}

export default OrphanagesMap;