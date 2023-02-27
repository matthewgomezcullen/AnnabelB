import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backBtn: {
        left: '20px',
        top: '20px',
    },
    bio: {
        padding: theme.spacing(1, 2, 1),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        '&:last-child': {
            paddingBottom: '16px !important',
        },
    },
    cardGrid: {
        color: theme.palette.background.paper,
        padding: '20px 20px',
    },
    cardMedia: {
        paddingTop: '95%',
    },
    clickable: {
        '&:hover': {
            borderColor: theme.palette.primary.main,
        },
    },
    container: {
        root: {
            padding: '0',
        },
    },
    contacts: {
        height: '100%',
        fontFamily: ['Bradley Hand', 'cursive'],
        lineHeight: 1,
    },
    contactsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '&:last-child': {
            padding: '0.1em !important',
        },
    },
    header: {
        backgroundColor: 'white',
        padding: theme.spacing(0, 0, 0),
        width: 'xl',
    },
    headingLink: {
        textDecoration: 'none',
    },
    paragraph: {
        padding: '16px',
        color: 'white',
    },
    picture: {
        width: '100%',
    },
    profilePicture: {
        position: 'fixed',
        bottom: '10px',
        left: '10px',
        height: '300px',
        width: '250px',
    },
    profilePictureSmall: {
        height: '300px',
        width: '250px',
    },
    subtitle: {
        color: 'secondary',
        fontFamily: ['Courier', 'monospace'],
    },
    title: {
        color: 'primary',
        fontFamily: ['Courier', 'monospace'],
    },
}));

export default useStyles;
