import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip, Rating } from '@mui/material';
import { LocationOn, PhoneOutlined } from '@mui/icons-material';
import useStyles from './styles';

function PlaceDetails({place, selected, refProp }) {
  const classes = useStyles();
  if(selected) refProp?.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Card elevation={6} >
      <CardMedia
        style={{height:300}}
        image={place.photo ? place.photo.images.large.url : 'https://source.unsplash.com/random'}
        title={place.name}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
        <Rating size="small" value={place.rating} readOnly/>
          <Typography variant="subtitle1">
            out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">
            Price
          </Typography>
          <Typography variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">
            Ranking
          </Typography>
          <Typography variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award, index) => (
          <Box my={1} display="flex" justifyContent="space-between" alignItems="center" key={index}>
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle1" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place.cuisine?.map(({ name }) => (
          <Chip key={name} label={name} size="small" className={classes.chip}/>
         )
        )}
        {place?.address && (
          <Typography variant="body2" color='textSecondary' className={classes.subtitle}>
              <LocationOn />
              {place.address}
              </Typography>
        )}
        {place?.phone && (
          <Typography variant="body2" color='textSecondary' className={classes.subtitle}>
              <PhoneOutlined />
              {place.phone}
              </Typography>
        )}

        <CardActions>
          <Button size="small" onClick={() => {window.open(place.web_url, '_blank')}}>
            Trip Advisor
          </Button>
          <Button size="small" color="primary" onClick={() => {window.open(place.website, '_blank')}}>
            Website
          </Button>
          </CardActions>
      </CardContent>
    </Card>
  )
}

export default PlaceDetails
