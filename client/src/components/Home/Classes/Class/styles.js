import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    clicked: {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.info.main,
        '&:hover': {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.info.main,
        },
    },
    notClicked: {
        color: '#005587',
        '&:hover': {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.info.main,
        },
    },
}));