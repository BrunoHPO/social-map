import React, {useContext, useState} from 'react';
import UserContext from '../../context/userContext';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const MapContainer = () => {
  
    const {users} = useContext(UserContext);
    //const apiKey = {insert your Google APIkey(Maps JavaScript API) right here !!!!};
        
    const mapStyles = {        
      height: "400px",
      width: "100%"
    };
    
    const defaultCenter = {
      lat: 40.866667, lng: 34.566667
    };
    
    return (
       <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={1.9}
            center={defaultCenter}>
                {
                    users.map(user => {                     
                                                
                        const userLocation = {
                            lat: Number(user.location.coordinates.latitude),
                            lng: Number(user.location.coordinates.longitude)
                        }
                        return (
                            <Marker 
                            key={user.name.first+' '+user.name.last}
                            position={userLocation}/>
                        )
                    })
                }
            </GoogleMap>
       </LoadScript>
    )
  }
  export default MapContainer;