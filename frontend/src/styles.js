import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backBtn: {
    left: '20px',
    top: '20px',
  },
  bio: {
    backgroundColor: 'steelblue',
    padding: theme.spacing(1, 2, 1),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  cardGrid: {
    color: theme.palette.background.paper,
    padding: '20px 20px',
  },
  cardMedia: {
    paddingTop: '90%',
  },
  clickable: {
    '&:hover': {
      borderColor: 'steelblue',
    },
  },
  container: {
    root: {
      padding: '0',
    },
  },
  email: {
    typography: {
      fontFamily: ['Bradley Hand', 'cursive'],
    },
  },
  header: {
    backgroundColor: 'white',
    height: '150px',
    padding: theme.spacing(5, 0, 6),
    width: 'xl',
  },
  headingLink: {
    textDecoration: 'none',
  },
  paragraph: {
    color: 'white',
    padding: '16px',
  },
  picture: {
    width: '100%',
  },
  profilePicture: {
    position: 'fixed',
    bottom: '10px',
    left: '10px',
    height: '278px',
    width: '250px',
  },
  subtitle: {
    color: '#B0C4DE',
  },
  title: {
    color: 'steelblue',
  },
}));

export default useStyles;
