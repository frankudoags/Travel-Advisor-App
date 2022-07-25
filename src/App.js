import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { getPlacesData } from './api/index'



function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState(0);
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filterPlaces = places?.filter(place => place.rating >= rating);
    setPlaces(filterPlaces);
  }, [rating, places]);


  useEffect(() => {
    if(!bounds.ne || !bounds.sw) return;
    setLoading(true);
    getPlacesData(type, bounds.sw, bounds.ne).then(data => {
      setPlaces(data?.filter(place => place.name && place.num_reviews > 0));
      setLoading(false);
    }).catch(error => {
      console.log(error);
      setLoading(false);
    });
  }, [bounds, type]);

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates}/>

      <Grid container spacing={3} style={{ width: '100% ', height: '100vh' }}>

        <Grid item xs={12} md={4}>
          <List
            places={places}
            childClicked={childClicked}
            isLoading={loading}
            type={type}
            rating={rating}
            setRating={setRating}
            setType={setType}
            elRefs={elRefs}
            setElRefs={setElRefs}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            setChildClicked={setChildClicked}
          />
        </Grid>

      </Grid>
    </>
  )
}

export default App
