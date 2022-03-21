import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: 'white',
    height: '150px',
    padding: theme.spacing(5, 0, 6),
    width: 'xl',
  },
  title: {
    color: 'steelblue',
  },
  cardGrid: {
    color: theme.palette.background.paper,
    padding: '20px 20px',
  },
  headingLink: {
    textDecoration: 'none',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      borderColor: 'steelblue',
    },
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  bio: {
    backgroundColor: 'steelblue',
    padding: theme.spacing(1, 2, 1),
  },
  paragraph: {
    color: 'white',
    padding: '16px',
  },
}));

export default useStyles;
