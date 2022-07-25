import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3), minWidth: 120, marginBottom: '50px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '25px',
    overflow: 'hidden'
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '75vh', overflow: 'scroll', scrollbarWidth: 'none'
  },
}), { defaultTheme: theme });