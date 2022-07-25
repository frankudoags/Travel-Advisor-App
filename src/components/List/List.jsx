import React, { useEffect, createRef } from 'react'
import { Typography, FormControl, InputLabel, MenuItem, Select, Grid, CircularProgress } from '@mui/material';
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import useStyles from './styles';


function List({ places, childClicked, isLoading, type, setType, rating, setRating, elRefs, setElRefs }) {
  const classes = useStyles();

  //UseEffect, ran when either `places` or `isLoading` changes
  useEffect(() => {
    if (isLoading === false) {
      const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());
      setElRefs(refs);
    }
  }, [places, isLoading, elRefs, setElRefs]);

  return (
    <div className={classes.container}>
      <Typography variant="h5" >
        Restaurants, Hotels & Attractions around you
      </Typography>
      {isLoading === true ?
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
        :
        (
          <>
            {/* Drop down selection for type of place */}
            <FormControl className={classes.formControl} variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>Type</InputLabel>
              <Select
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <MenuItem value="restaurants">Restaurants</MenuItem>
                <MenuItem value="hotels">Hotels</MenuItem>
                <MenuItem value="attractions">Attractions</MenuItem>
              </Select>
            </FormControl>

            {/* Drop down selection for rating */}
            <FormControl className={classes.formControl} variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>Rating</InputLabel>
              <Select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={3}>3 stars +</MenuItem>
                <MenuItem value={4}>4 stars +</MenuItem>
                <MenuItem value={4.5}>4.5 stars +</MenuItem>
              </Select>
            </FormControl>

            {/* List of places */}
            <Grid container spacing={3} className={classes.list}>
              {places?.map((place, index) => {
                if (place.name) return (
                  <Grid item xs={12} key={index}>
                    <PlaceDetails
                      place={place}
                      selected={Number(childClicked) === index}
                      refProp={elRefs[index]}
                    />
                  </Grid>
                )
                else return null;
              }
              )}
            </Grid>
          </>
        )
      }
    </div >
  )
}

export default List
