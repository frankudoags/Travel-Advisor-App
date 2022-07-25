import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, Rating, useMediaQuery } from '@mui/material';
import { LocationOnOutlined } from '@mui/icons-material';
import useStyles from './styles';



function Map({ coordinates, setCoordinates, setBounds, places, setChildClicked }) {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const defaultCoordinates = {
    lat: 4.51821,
    lng: 3.3996786
  };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        defaultCenter={defaultCoordinates}
        center={coordinates}
        defaultZoom={13}
        margin={[0, 0, 0, 0]}
        options={{ disableDefaultUI: true, zoomControl: true }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child) }
      >
        {places?.map((place, index) => (
          <div
            key={index}
            lat={Number(place?.latitude)}
            lng={Number(place?.longitude)}
          >
            {
              isMobile ?
                <LocationOnOutlined color='primary' fontSize='large' />
                :
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant='subtitle' className={classes.typography}>
                    {place.name}
                  </Typography>
                  <img src={place.photo ? place.photo.images.large.url : 'https://source.unsplash.com/random'} alt={place.name} />
                  <Rating size="small" value={place?.rating} readOnly />
                </Paper>
            }
          </div>
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map
