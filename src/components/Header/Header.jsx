// eslint-disable-next-line
import React, { useState } from 'react'
import {AppBar, Toolbar, InputBase} from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {SearchOutlined} from '@mui/icons-material';
// import {Autocomplete} from '@react-google-maps/api';
import useStyles from './styles';

function Header({ setCoordinates }) {
    const classes = useStyles();
    // const [autocomplete, setAutocomplete] = useState(null);

    // const onLoad = (autocomplete) => {
    //     setAutocomplete(autocomplete);
    // }

    // const onPlaceChanged = () => {
    //     const lat = autocomplete.getPlace().geometry.location.lat();
    //     const lng = autocomplete.getPlace().geometry.location.lng();
    //     setCoordinates({lat, lng});
    // }

  return (
    <AppBar position="static">
        <Toolbar className={classes.toolbar}>
            <Typography variant="h6">
                Travel Advisor
            </Typography>
            <Box display="flex">
                <Typography variant="h6" className={classes.title}>
                    Explore new places
                </Typography>
                {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
                    <div className={classes.search}>
                        <div className={classes.SearchOutlined}>
                            <SearchOutlined />
                        </div>
                        <InputBase placeholder='Search ...' classes={{ root: classes.inputRoot, input: classes.inputInput }}/>
                    </div>
                {/* </Autocomplete> */}
            </Box>
        </Toolbar>
    </AppBar>
                
  )
}

export default Header
