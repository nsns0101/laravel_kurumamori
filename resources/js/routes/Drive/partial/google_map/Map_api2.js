import React, { useContext } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { DriveContext } from "../../DriveContainer";


export const MapContainer = (props) => {
    const {
      day_5_drive_detection,
    } = useContext(DriveContext);
    
    const location = [];
    const location_color = [];
    //1차배열은 날짜 2차배열은 값
    // console.log(day_5_drive_detection);
    for(var i = 0; i < day_5_drive_detection[0].length; i++){
      location.push({
        lat : day_5_drive_detection[0][i].latitude, 
        lng : day_5_drive_detection[0][i].longitude
      });
      if(day_5_drive_detection[0][i].bool_report) location_color.push("red");
      else if(day_5_drive_detection[0][i].bool_sleep) location_color.push("orange");
      else if(day_5_drive_detection[0][i].bool_sudden_acceleration) location_color.push("blue");
      else if(day_5_drive_detection[0][i].bool_sudden_stop) location_color.push("green");
    }
    console.log(location);
    return (
      <Map
        google={props.google}
        zoom={8}
        center={location[1]}
        // style={mapStyles}
        // initialCenter={location[0]}
      >
      {location.map( (value, index) => {
        <Marker
          position={{
            // lat: location[index].lat,
            // lng: location[index].lng
            lat: 37.778519, lng: -122.405640
          }}
          icon={{
            url: `/icon/${location_color[i]}_map_icon.png`,
            anchor: new google.maps.Point(32,32),
            scaledSize: new google.maps.Size(64,64)
          }}
        />
      })}
      </Map>
    );
  }

export default GoogleApiWrapper({
  apiKey: process.env.MIX_GCP_API_KEY
})(MapContainer);